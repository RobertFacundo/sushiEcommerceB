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
const PORT = process.env.PORT || 3000;

app.use('/api/webhooks', express.raw({ type: 'application/json' }), stripeWebhookRoutes)

connectDB();

app.use(cors(
    {
        origin: 'https://sushi-ecommerce-f.vercel.app',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'x-cart-id'
        ]
    }
));

app.options('*', cors());

app.use(express.json());

app.use('/images',
    express.static(path.join(process.cwd(), 'data/images'))
)


app.use('/user', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/cart', cartRoutes);
app.use('/api/orders', checkoutRoutes);
app.use('/api/giftcards', giftCardRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server working! on port=> ${PORT}`);
});