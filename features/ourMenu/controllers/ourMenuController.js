import * as menuService from '../services/ourMenuService.js';

export const fetchCategories = async (req, res) => {
    try {
        const categories = await menuService.getAllCategories();

        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchProductsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const products = await menuService.getProductsByCategory(categoryId);

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const fetchProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await menuService.getProductById(productId);

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};