import stripe from "../../../config/stripe.js";
import { handleStripeEvent } from "../services/webhook.service.js";

export async function stripeWebhookController(req, res) {
    console.log('🔥 Stripe webhook HIT');
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (error) {
        console.error('[STRIPE SIGNATURE ERROR]', error.message);
        return res.status(400).send(`Webhook Error:${error.message}`);
    }

    try {
        await handleStripeEvent(event);
        res.json({ received: true });
    } catch (error) {
        console.error('[WEBHOOK ERROR', error);
        res.status(500).json({ error: 'Webhook handlingfailed' });
    }
}