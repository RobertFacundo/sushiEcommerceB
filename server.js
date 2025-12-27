import express from 'express';
import path from 'path'
import cors from 'cors';
import { connectDB } from './config/connectDB.js';
import authRoutes from './routes/auth.routes.js';
import menuRoutes from './features/ourMenu/routes/menu.routes.js';
import cartRoutes from './features/cart/routes/cart.routes.js';
import stripeWebhookRoutes from './routes/webhook.routes.js';
import checkoutRoutes from './routes/checkout.routes.js';
import giftCardRoutes from './routes/giftCard.routes.js'

const app = express();

app.use('/api/webhooks', express.raw({ type: 'application/json' }), stripeWebhookRoutes)

connectDB();

const PORT = process.env.PORT || 3000;
const allowedOrigins = [
    'https://sushi-ecommerce-f.vercel.app',
    'http://localhost:5173'
];

app.use('/images',
    express.static(path.join(process.cwd(), 'data/images'))
)


app.use(express.json());
app.use(cors(
    {
        origin: 'https://sushi-ecommerce-f.vercel.app',
        credentials: true
    }
));


app.use('/user', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/cart', cartRoutes);
app.use('/api/orders', checkoutRoutes);
app.use('/api/giftcards', giftCardRoutes);

app.listen(PORT, () => {
    console.log(`Server working! on port=> ${PORT}`);
});