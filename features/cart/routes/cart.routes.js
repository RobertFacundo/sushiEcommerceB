import { Router } from "express";
import authMiddleware from "../../../middlewares/auth.middleware.js";
import { validate } from "../../../middlewares/validate.middleware.js";
import {
    addItemSchema,
    updateItemSchema,
    productIdParamSchema
} from '../validators/cart.validator.js';
import {
    getCart,
    addItem,
    updateItem,
    removeItem,
    clearCart,
    mergeCart
} from '../controllers/cart.controller.js';

const router = Router();

router.get('/', getCart);
router.post('/items', validate(addItemSchema, 'body'), addItem);
router.put('/items/:productId', validate(productIdParamSchema, 'params'), validate(updateItemSchema, 'body'), updateItem);
router.delete('/items/:productId', validate(productIdParamSchema, 'params'), removeItem);
router.delete('/', clearCart);
router.post('/merge', authMiddleware, mergeCart);

export default router;