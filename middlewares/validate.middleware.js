import { z } from 'zod';

export const validate = (schema, property = "body") =>
    function validateMiddleware(req, res, next) {
        try {
            req[property] = schema.parse(req[property]);

            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    error: error.issues.map((e) => e.message)
                });
            }

            return res.status(400).json({ error: error });
        }
    };