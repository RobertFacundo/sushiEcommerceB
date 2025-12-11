import express from 'express';
import * as menuController from '../controllers/ourMenuController.js';

const router = express.Router();

router.get('/categories', menuController.fetchCategories);

router.get('/products/category/:categoryId', menuController.fetchProductsByCategory);

router.get('/products/:productId', menuController.fetchProductById);

export default router;