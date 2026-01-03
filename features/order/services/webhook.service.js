import Order from '../models/order.model.js';
import Cart from '../../cart/models/Cart.model.js';
import User from '../../../models/User.model.js';
import GiftCardModel from '../../GiftCards/models/GiftCard.model.js';

export async function handleStripeEvent(event) {
    console.log('➡️ handleStripeEvent:', event.type);
    switch (event.type) {
        case 'checkout.session.completed':
            await handleCheckoutCompleted(event.data.object);
            break;
        case 'payment_intent.payment_failed':
            console.warn('Payment failed:', event.data.object.id);
            break;
        default:
            console.log(`Unhandled event type: ${event.type}`)
    }
}

async function handleCheckoutCompleted(session) {
    console.log('📦 Entered handleCheckoutCompleted', session);
    const orderId = session.metadata?.orderId;
    const cartId = session.metadata?.cartId;
    console.log('📦 orderId:', orderId, 'cartId:', cartId);

    if (!orderId) {
        throw new Error('Order id is missing in metadata');
    }

    const order = await Order.findById(orderId);
    console.log(order, 'ORDER !!!!')

    if (!order) {
        throw new Error('Order not found');
    }
    console.log('📝 Order loaded:', order._id);

    if (order.status === 'paid') {
        return;
    }

    order.status = 'paid';
    order.paidAt = new Date();
    order.stripe.paymentIntentId = session.payment_intent;

    if (order.giftCard?.applied && order.giftCard.code) {
        await GiftCardModel.findOneAndUpdate(
            { code: order.giftCard.code },
            { used: true, usedAt: new Date() }
        );
    }

    await order.save();
    console.log('📝 Order loaded:', order._id);

    if (cartId) {
        await Cart.updateOne(
            { cartId },
            {
                status: 'completed',
                items: []
            }
        )
    }

    if (order.customer.userId) {
        console.log('🧑‍💻 User ID:', order.customer.userId);
        console.log('🧑‍💻 order Items:', order.items);
        const purchaseItems = order.items.map(item => ({
            orderId: order._id,
            productId: item.productId,
            name: item.name,
            image: item.imageUrl,
            price: item.unitPrice,
            quantity: item.quantity,
            purchasedAt: new Date()
        }))

        console.log('📦 Items to push:', purchaseItems);

        await User.updateOne(
            { _id: order.customer.userId },
            {
                $push: {
                    purchaseHistory: {
                        $each: purchaseItems
                    }
                }
            }
        );

        const updatedUser = await User.findById(order.customer.userId);
        console.log('📊 Updated user purchaseHistory:', updatedUser.purchaseHistory.length);
        console.log('📬 Updated notifications:', updatedUser.notifications.length);

        await User.addNotification(
            order.customer.userId,
            'PURCHASE_COMPLETED',
            { orderId: order._id }
        )
    }
}