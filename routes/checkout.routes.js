import { Router } from "express";
import { createCheckoutSessionController, getOrderByIdController } from "../features/order/controllers/order.controller.js";
import optionalAuthMiddleware from "../middlewares/optionalAuth.middleware.js";

const router = Router();

router.post('/checkout/session', optionalAuthMiddleware, createCheckoutSessionController);
router.get('/:orderId', getOrderByIdController);

export default router;