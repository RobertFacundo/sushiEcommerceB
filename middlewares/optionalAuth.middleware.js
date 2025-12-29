import jwt from 'jsonwebtoken';

export default function optionalAuthMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        req.user = null;
        return next();
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        req.user = null;
        return next();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = {
            id: decoded.sub,
            role: decoded.role
        };
    } catch (error) {
        req.user = null
    }

    next();
}