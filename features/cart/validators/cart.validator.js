import { z } from 'zod';

export const addItemSchema = z.object({
    productId: z.string().length(24, 'Invalid productId'),
    quantity: z.number().int().min(1).optional()
});

export const updateItemSchema = z.object({
    quantity: z.number().int()
});

export const productIdParamSchema = z.object({
    productId: z.string().length(24, 'invalid productId')
});