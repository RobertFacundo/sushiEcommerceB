import express from 'express';
import cors from 'cors';
import { connectDB } from './config/connectDB.js';
import authRoutes from './routes/auth.routes.js'

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

app.use('/user', authRoutes)

app.listen(PORT, () => {
    console.log(`Server working! on port=> ${PORT}`);
});