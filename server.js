import express from 'express';
import path from 'path'
import cors from 'cors';
import { connectDB } from './config/connectDB.js';
import authRoutes from './routes/auth.routes.js';
import menuRoutes from './features/ourMenu/routes/menu.routes.js'

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.use('/images',
    express.static(path.join(process.cwd(), 'data/images'))
)

app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));


app.use('/user', authRoutes);
app.use('/api/menu', menuRoutes);

app.listen(PORT, () => {
    console.log(`Server working! on port=> ${PORT}`);
});