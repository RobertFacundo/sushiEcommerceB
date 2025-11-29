import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: {
        error: 'Too many login attempts, please try again after a minute.'
    },
    standardHeaders: true,
    legacyHeaders: false
});

export const registerLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 3,
    message: {
        error: 'Too many accounts created from this IP, please try again after a minute.'
    },
    standardHeaders: true,
    legacyHeaders: false
})