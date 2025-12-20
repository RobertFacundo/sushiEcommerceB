import mongoose from "mongoose";

const { Schema, model } = mongoose;

const OrderItemSchema = new Schema(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        unitPrice: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        subtotal: {
            type: Number,
            required: true
        },
    },
    { _id: false }
);

const OrderSchema = new Schema(
    {
        customer: {
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                default: null,
                index: true
            },
            email: {
                type: String,
                required: true
            }
        },
        cartId: {
            type: Schema.Types.ObjectId,
            ref: 'Cart',
            required: true
        },
        items: {
            type: [OrderItemSchema],
            required: true
        },
        pricing: {
            subtotal: {
                type: Number,
                required: true
            },
            discountPercent: {
                type: Number,
                default: 0
            },
            discountAmount: {
                type: Number,
                default: 0
            },
            total: {
                type: Number,
                required: true
            }
        },
        giftCard: {
            code: {
                type: String
            },
            applied: {
                type: Boolean,
                default: false
            }
        },
        stripe: {
            sessionId: {
                type: String,
                index: true
            },
            paymentIntentId: {
                type: String
            }
        },
        status: {
            type: String,
            enum: [
                "pending",
                "paid",
                "failed",
                "cancelled"
            ],
            default: "pending",
            index: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model('Order', OrderSchema);