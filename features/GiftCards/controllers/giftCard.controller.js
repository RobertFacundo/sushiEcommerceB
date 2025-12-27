import GiftCardModel from "../models/GiftCard.model.js";
import { createGiftcardForUser, validateGiftCard } from "../services/giftCard.service.js";

export async function validateGiftCardController(req, res) {
    try {
        const { code } = req.body;
        const userId = req.user._id

        const giftCard = await validateGiftCard({ code, userId });

        res.json({
            code: giftCard.code,
            discountPercent: giftCard.discountPercent
        });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

export async function createGiftCardForUserController(req, res) {
    const userId = req.user._id;

    const giftCard = await createGiftcardForUser({ userId });

    res.status(201).json(giftCard);
};

export async function getMyGiftCardController(req, res) {
    console.log('USER FROM TOKEN:', req.user);
    const userId = req.user.id;

    const giftCard = await GiftCardModel.findOne({ owner: userId });

    res.json(giftCard);
}
