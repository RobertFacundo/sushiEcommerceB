import express from 'express';
import cors from 'cors';
import { connectDB } from './config/connectDB.js';
import authRoutes from './routes/auth.routes.js'

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/user', authRoutes)

app.listen(PORT, () => {
    console.log(`Server working! on port=> ${PORT}`);
});