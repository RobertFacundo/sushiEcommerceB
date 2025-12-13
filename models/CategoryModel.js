import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        es: { type: String, required: true },
        en: { type: String, required: true }
    },
    slug: {
        es: { type: String, required: true },
        en: { type: String, required: true }
    },
    imageUrl: String,
    description: {
        es: { type: String, required: true },
        en: { type: String, required: true }
    }
});

export default mongoose.model('Category', categorySchema);