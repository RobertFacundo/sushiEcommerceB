import mongoose from "mongoose";

const { Schema, model } = mongoose;

const GiftCardSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        index: true
    },
    discountPercent: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    used: {
        type: Boolean,
        default: false
    },
    usedAt: {
        type: Date,
        default: null
    },
    usedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        default: null
    },
    expiresAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});

export default model('GiftCard', GiftCardSchema);