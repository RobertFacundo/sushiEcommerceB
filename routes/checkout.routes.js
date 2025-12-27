import { Router } from "express";
import { createCheckoutSessionController, getOrderByIdController } from "../features/order/controllers/order.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/checkout/session', authMiddleware, createCheckoutSessionController);
router.get('/:orderId', getOrderByIdController);

export default router;