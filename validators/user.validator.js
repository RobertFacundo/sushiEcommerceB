import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string()
        .min(2, 'name must be at least 2 characters')
        .max(50, 'Name is too long')
        .transform(val => val.trim()),
    email: z.string().email({ pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ }),
    password: z.string()
        .min(6, 'Password must be at least 6 characters'),
    role: z.enum(['customer', 'admin']).optional()
});

export const loginSchema = z.object({
    email: z.string().email({ pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ }),
    password: z.string()
        .min(6, 'Password must be at least 6 characters')
});

export const updateProfileSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50)
        .optional()
        .transform(val => val?.trim()),
    email: z.string().email({ pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ }).optional(),
    password: z.string()
        .min(6)
        .optional(),
    avatar: z.string().optional()
});

export const addNotificationSchema = z.object({
    type: z.string().min(1),
    data: z.record(z.any()).optional()
});

export const markNotificationSchema = z.object({
    notificationId: z.string().length(24, 'Invalid notificationId')
})