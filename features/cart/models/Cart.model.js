import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CartItemSchema = new Schema(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
            index: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        }
    },
    { _id: false }
);

const CartSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: null,
            index: true
        },
        cartId: {
            type: String,
        },
        items: {
            type: [CartItemSchema],
            default: []
        },
        status: {
            type: String,
            enum: ['active', 'ordered', 'abandoned'],
            default: 'active',
            index: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

CartSchema.index(
    {
        userId: 1,
        status: 1
    },
    {
        unique: true,
        partialFilterExpression: {
            status: 'active',
            userId: { $ne: null }
        }
    }
);

CartSchema.index(
    {
        cartId: 1
    },
    {
        unique: true,
        sparse: true
    }
);

export default model('Cart', CartSchema);