import mongoose from "mongoose";
import { connectDB } from "./config/connectDB.js";
import Categorymodel from "./models/Categorymodel.js";
import ProductModel from "./models/ProductModel.js";
import { categories, products } from './data/menuData.js';

const seedDB = async () => {
    try {
        await connectDB();

        await Categorymodel.deleteMany();
        await ProductModel.deleteMany();

        const createdCategories = await Categorymodel.insertMany(categories);

        const productsWithCategoryId = products.map(prod => {
            const category = createdCategories.find(c => c.name === prod.categoryName);

            return { ...prod, categoryId: category._id }
        });

        await ProductModel.insertMany(productsWithCategoryId);

        console.log('sedd completed');
        process.exit()
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedDB();