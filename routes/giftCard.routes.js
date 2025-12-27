import express from 'express';
import { validateGiftCardController, createGiftCardForUserController, getMyGiftCardController } from '../features/GiftCards/controllers/giftCard.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/validate', authMiddleware, validateGiftCardController);
router.post('/assign-to-user', authMiddleware, createGiftCardForUserController);
router.get('/me', authMiddleware, getMyGiftCardController)

export default router;