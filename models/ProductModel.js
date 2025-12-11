import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    imageUrl: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    stock: Number
});

export default mongoose.model('Product', productSchema)