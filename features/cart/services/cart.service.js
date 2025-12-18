import CartModel from "../models/Cart.model.js";
import { v4 as uuidv4 } from 'uuid'

export async function getOrCreateCart({ userId = null, cartId = null }) {
    if (userId) {
        if (cartId) {
            return await mergeCarts({ userId, cartId });
        }

        let cart = await CartModel.findOne({
            userId,
            status: 'active'
        });

        if (!cart) {
            cart = await CartModel.create({
                userId,
                status: 'active'
            });
        }

        return cart;
    }

    let cart;
    if (cartId) {
        cart = await CartModel.findOne({ cartId, status: 'active' });
    }

    if (!cart) {
        cart = await CartModel.findOne({ userId: null, status: 'active' })
    }

    if (!cart) {
        cartId = cartId || uuidv4();
        cart = await CartModel.create({ cartId, status: 'active' });
    }

    return cart;
};

export async function getCart({ userId = null, cartId = null }) {
    if (!userId && !cartId) {
        return { items: [] };
    }
    const cart = await getOrCreateCart({ userId, cartId });

    if (!cart) {
        console.error('Cart is still null after getOrCreateCart'); 
        return { items: [] };  // evita que rompa
    }

    if (cart.items?.length > 0) {
        await cart.populate({
            path: 'items.productId',
            select: 'name price imageUrl stock'
        });
    }

    return cart;
};

export async function addItemToCart({
    userId = null,
    cartId = null,
    productId,
    quantity = 1
}) {
    if (!productId) {
        throw new Error('productId is required');
    }

    const cart = await getOrCreateCart({ userId, cartId });

    const existingItem = cart.items.find(
        item => item.productId.toString() === productId.toString()
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({
            productId,
            quantity
        });
    }

    await cart.save();

    return cart;
};

export async function updateItemQuantity({
    userId = null,
    cartId = null,
    productId,
    quantity
}) {
    if (!productId) throw new Error('productId is required');

    const cart = await getOrCreateCart({ userId, cartId });

    const itemIndex = cart.items.findIndex(
        item => item.productId.toString() === productId.toString()
    );

    if (itemIndex === -1) {
        throw new Error('product not found in cart');
    }

    if (quantity <= 0) {
        cart.items.splice(itemIndex, 1);
    } else {
        cart.items[itemIndex].quantity = quantity;
    }

    await cart.save();

    return cart;
};

export async function removeItemFromCart({
    userId = null,
    cartId = null,
    productId
}) {
    const cart = await getOrCreateCart({ userId, cartId });

    cart.items = cart.items.filter(
        item => item.productId.toString() !== productId.toString()
    );

    await cart.save();

    return cart;
};

export async function clearCart({ userId = null, cartId = null }) {
    const cart = await getOrCreateCart({ userId, cartId });

    cart.items = [];

    await cart.save();

    return cart;
}

export async function mergeCarts({ userId, cartId }) {
    if (!userId) return null;

    const userCart = await getOrCreateCart({ userId });

    if (!cartId) return userCart;

    const guestCart = await CartModel.findOne({
        cartId,
        status: 'active'
    });

    if (!guestCart || guestCart.items.length === 0) {
        return userCart;
    }

    guestCart.items.forEach(guestItem => {
        const existingItem = userCart.items.find(
            item =>
                item.productId.toString() ===
                guestItem.productId.toString()
        );

        if (existingItem) {
            existingItem.quantity += guestItem.quantity;
        } else {
            userCart.items.push({
                productId: guestItem.productId,
                quantity: guestItem.quantity
            });
        }
    });

    guestCart.status = 'abandoned';

    await Promise.all([
        userCart.save(),
        guestCart.save()
    ]);

    await userCart.populate({
        path: 'items.productId',
        select: 'name price imageUrl stock'
    })
    return userCart;
}