import * as cartService from '../services/cart.service.js';

function getCartContext(req) {

    if (req.user?.id) {
        return {
            userId: req.user.id,
            cartId: null
        }
    }
    return {
        userId: req.user?.id || null,
        cartId: req.headers['x-cart-id'] || null
    };
}

export async function getCart(req, res, next) {
    try {
        const context = getCartContext(req);
        console.log('[GET CART]', context);

        if (!context.userId && !context.cartId) {
            return res.status(200).json({
                items: []
            });
        }

        const cart = await cartService.getCart(context);

        console.log('[GET CART RESULT]', {
            cartId: cart.cartId,
            userId: cart.userId,
            items: cart.items
        });

        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

export async function addItem(req, res, next) {
    try {
        const context = getCartContext(req);
        const { productId, quantity } = req.body;

        console.log('[ADD ITEM]', {
            userId: context.userId,
            cartId: context.cartId,
            productId,
            quantity
        });

        const cart = await cartService.addItemToCart({
            ...context,
            productId,
            quantity
        });

        console.log('[CART AFTER ADD]', {
            cartId: cart.cartId,
            userId: cart.userId,
            items: cart.items
        });

        res.status(200).json(cart);
    } catch (error) {
        next(error)
    }
}

export async function updateItem(req, res, next) {
    try {
        const context = getCartContext(req);
        const { productId } = req.params;
        const { quantity } = req.body;

        const cart = await cartService.updateItemQuantity({
            ...context,
            productId,
            quantity
        });

        res.status(200).json(cart);
    } catch (error) {
        next(error)
    }
};

export async function removeItem(req, res, next) {
    try {
        const context = getCartContext(req);
        const { productId } = req.params;

        const cart = await cartService.removeItemFromCart({
            ...context,
            productId
        });

        res.status(200).json(cart);
    } catch (error) {
        next(error)
    }
}

export async function clearCart(req, res, next) {
    try {
        const context = getCartContext(req);

        const cart = await cartService.clearCart(context);

        res.status(200).json(cart);
    } catch (error) {
        next(error)
    }
}

export async function mergeCart(req, res, next) {
    try {
        const userId = req.user?.id;
        const cartId = req.headers['x-cart-id'];

        if (!cartId) {
            return res.status(200).json(null);
        }

        const cart = await cartService.mergeCarts({
            userId,
            cartId
        });

        res.status(200).json(cart);
    } catch (error) {
        next(error)
    }
}