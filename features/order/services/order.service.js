import Order from '../models/order.model.js';
import Cart from '../../cart/models/Cart.model.js';
import GiftCardModel from '../../GiftCards/models/GiftCard.model.js';
import stripe from '../../../config/stripe.js';

export async function createCheckoutSession({
    cartId,
    userId = null,
    customerEmail,
    giftCardCode = null
}) {

    const cart = await Cart.findOne({ cartId }).populate('items.productId');
    if (!cart || cart.items.length === 0) {
        throw new Error('Cart is empty or not found');
    }

    const items = cart.items.map(item => {
        const unitPrice = item.productId.price;
        const quantity = item.quantity;

        return {
            productId: item.productId._id,
            name: item.productId.name.es,
            image: item.productId.imageUrl,
            unitPrice,
            quantity,
            subtotal: unitPrice * quantity
        };
    });
    let giftCard = null;
    let coupon = null;
    let stripeDiscounts = [];

    const subtotal = items.reduce((acc, i) => acc + i.subtotal, 0);
    let discountPercent = 0;
    let discountAmount = 0;


    if (userId && giftCardCode) {
        giftCard = await GiftCardModel.findOne({ code: giftCardCode });

        if (!giftCard) throw new Error('Invalid gift card');
        if (giftCard.used) throw new Error('Gift card already used');
        if (giftCard.owner.toString() !== userId.toString()) {
            throw new Error('This gift card does not belong to you');
        }
        if (giftCard.expiresAt && giftCard.expiresAt < new Date()) {
            throw new Error('Gift card expired');
        }

        discountPercent = giftCard.discountPercent;
        discountAmount = Math.round(subtotal * discountPercent / 100);

        coupon = await stripe.coupons.create({
            percent_off: giftCard.discountPercent,
            duration: 'once'
        });

        stripeDiscounts.push({ coupon: coupon.id })
    }

    const total = subtotal - discountAmount;

    const order = await Order.create({
        customer: {
            userId,
            email: customerEmail
        },
        cartId,
        items,
        pricing: {
            subtotal,
            discountPercent,
            discountAmount,
            total
        },
        giftCard: giftCard
            ? {
                code: giftCard.code,
                applied: true
            }
            : { applied: false },
        status: 'pending'
    });

    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        customer_email: customerEmail,
        line_items: items.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(item.unitPrice * 100)
            },
            quantity: item.quantity
        })),
        discounts: coupon ? [{ coupon: coupon.id }] : [],
        metadata: {
            orderId: order._id.toString(),
            cartId
        },
        success_url: `${process.env.FRONTEND_URL}/checkout/success?orderId=${order._id}`,
        cancel_url: `${process.env.FRONTEND_URL}/checkout/cancel`
    });


    order.stripe = {
        sessionId: session.id
    };

    await order.save();

    return {
        checkoutUrl: session.url,
        orderId: order._id
    }
}