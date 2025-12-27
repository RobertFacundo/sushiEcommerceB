import mongoose from "mongoose";

export function validateObjectId(paramName) {
    return (req, res, next) => {
        const id = req.params[paramName];

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: `Invalid ${paramName}` })
        }
        next();
    }
}
 