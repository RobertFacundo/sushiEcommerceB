import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        es: { type: String, required: true },
        en: { type: String, required: true }
    },
    description: {
        es: { type: String, required: true },
        en: { type: String, required: true }
    },
    price: Number,
    imageUrl: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    stock: Number
});

export default mongoose.model('Product', productSchema)