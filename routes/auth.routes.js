import { Router } from "express";
import { register, login, profile, updateProfile, addNotification, markNotification } from "../controllers/auth.controller.js";
import { validate } from '../middlewares/validate.middleware.js'
import { registerSchema, loginSchema, updateProfileSchema, addNotificationSchema, markNotificationSchema } from "../validators/user.validator.js";
import { loginLimiter, registerLimiter } from "../middlewares/rateLimit.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/register', registerLimiter, validate(registerSchema, 'body'), register);
router.post('/login', loginLimiter, validate(loginSchema, 'body'), login);

router.get('/profile', authMiddleware, profile);
router.patch('/profile', authMiddleware, validate(updateProfileSchema, 'body'), updateProfile);

router.post('/notifications', authMiddleware, validate(addNotificationSchema, 'body'), addNotification);
router.patch('/notifications/:notificationId/read', authMiddleware, validate(markNotificationSchema, 'params'), markNotification);

export default router;