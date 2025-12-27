import Order from '../models/order.model.js'
import { createCheckoutSession } from "../services/order.service.js";

export async function createCheckoutSessionController(req, res) {
    try {
        const { cartId, giftCardCode, customerEmail } = req.body;

        if (!cartId || !customerEmail) {
            return res.status(400).json({
                message: 'cartId & customer email are required'
            });
        }

        const userId = req.user?.id || null;

        console.log(userId,'LOGUSERID!!!!!!!!!!!!!!!!!!')

        const result = await createCheckoutSession({
            cartId,
            userId,
            customerEmail,
            giftCardCode
        });

        return res.status(201).json({
            checkoutUrl: result.checkoutUrl,
            orderId: result.orderId
        });
    } catch (error) {
        console.error('[CHECKOUTERROR]', error);

        return res.status(400).json({
            message: error.message || 'Checkout failed'
        })
    }
}

export async function getOrderByIdController(req, res) {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);

    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }

    res.json({
        status: order.status,
        pricing: order.pricing
    })
}