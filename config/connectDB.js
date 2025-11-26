import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const URI_DB = process.env.MONGO_URI

export const connectDB = async () => {
    try {
        await mongoose.connect(URI_DB);
        console.log('mongoose conection established...');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
