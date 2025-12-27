import GiftCardModel from "../models/GiftCard.model.js";
import crypto from 'crypto';

function generateGiftCardCode() {
    return crypto.randomBytes(6).toString('hex').toUpperCase();
}
export async function validateGiftCard({ code, userId }) {
    if (!code) throw new Error('Gift card code is required');

    const giftCard = await GiftCardModel.findOne({ code });

    if (!giftCard) {
        throw new Error('invalid gift card');
    }

    if (giftCard.used) {
        throw new Error('Gift card already used');
    }

    if (giftCard.owner.toString() !== userId.toString()) {
        throw new Error('This giftCard does not belong to you');
    }

    if (giftCard.expiresAt && giftCard.expiresAt < new Date()) {
        throw new Error('Gift card expired');
    }

    return giftCard;
}

export async function markGiftCardAsUsed({
    giftCardId,
    userId,
    orderId
}) {
    return GiftCardModel.findByIdAndUpdate(
        giftCardId,
        {
            used: true,
            usedAt: new Date(),
            usedBy: userId,
            orderId
        },
        { new: true }
    );
};

export async function createGiftcardForUser({
    userId,
    discountPercent = 25,
    expiresAt = null
}) {
    const code = generateGiftCardCode();

    const giftCard = await GiftCardModel.create({
        code,
        discountPercent,
        expiresAt,
        owner: userId
    }); 

    console.log(giftCard, 'CREATEDGIFT CARD')

    return giftCard;
}