import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const { Schema, model } = mongoose;

const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);

function generateGiftCard() {
    return 'GC-' + Math.random().toString(36).substring(2, 10).toUpperCase();
}

const CartItemSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },
}, { _id: false });

const NotificationSchema = new Schema({
    _id: { type: mongoose.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    message: String,
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: () => new Date() }
});

const PurchaseItemSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    name: { type: String, required: true },
    image: { type: String },
    price: { type: Number },
    quantity: { type: Number, default: 1 },
    purchasedAt: { type: Date, default: () => new Date() },
}, { _id: false })

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'name is required'],
        minLength: [2, 'The name should have at least 2 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        validate: {
            validator: (v) => validator.isEmail(v),
            message: props => `${props.value} is not a valid email`
        }
    },
    passwordHash: {
        type: String,
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },
    cart: {
        type: [CartItemSchema],
        default: []
    },
    giftCard: {
        type: String,
        unique: true,
        default: generateGiftCard
    },
    notifications: {
        type: [NotificationSchema],
        default: [],
    },
    avatar: {
        type: String,
        default: '/avatar.jpg',
    },
    purchaseHistory: { type: [PurchaseItemSchema], default: [] }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            delete ret.passwordHash;
            return ret;
        }
    }
});

UserSchema.index({ email: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } });

UserSchema.pre('save', async function () {
    if (!this.isModified('passwordHash')) return;

    const plain = this.passwordHash;
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashed = await bcrypt.hash(plain, salt);
    this.passwordHash = hashed;
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.passwordHash);
};

UserSchema.statics.addNotification = function (userId, message) {
    return this.findByIdAndUpdate(
        userId,
        {
            $push: {
                notifications: {
                    _id: new mongoose.Types.ObjectId(),
                    message,
                    read: false,
                    createdAt: new Date()
                }
            }
        },
        { new: true }
    );
};

UserSchema.statics.createUser = async function ({ name, email, password, role }) {
    const User = this;

    if (!validator.isEmail(email)) throw new Error('Invalid email');
    if (!password || password.length < 6) throw new Error('Password must have at least 6 characters');

    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existing) throw new Error('Email already registered');

    const user = new User({
        name,
        email,
        passwordHash: password,
        role: role || 'customer'
    });
    await user.save();

    return user;
};


export default model('User', UserSchema);