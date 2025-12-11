import Categorymodel from "../../../models/Categorymodel.js";
import ProductModel from "../../../models/ProductModel.js";

export const getAllCategories = async () => {
    return await Categorymodel.find();
}

export const getProductsByCategory = async (categoryId) => {
    return await ProductModel.find({ categoryId });
};

export const getProductById = async (productId) => {
    return await ProductModel.findById(productId)
};