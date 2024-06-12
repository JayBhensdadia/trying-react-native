// src/services/cartService.ts
import { connectToDatabase as getDBConnection } from '@/db/database';

export const addToCart = async (productId: number, userId: number, quantity: number) => {
    const db = await getDBConnection();
    const query = `INSERT INTO cart (productId, userId, quantity) VALUES ($productId, $userId, $quantity)`;
    const params = { $productId: productId, $userId: userId, $quantity: quantity };

    const statement = await db.prepareAsync(query);
    try {
        await statement.executeAsync(params);
        console.log("Item added to cart successfully");
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};

export const updateCart = async (id: number, quantity: number) => {
    const db = await getDBConnection();
    const query = `UPDATE cart SET quantity = $quantity WHERE id = $id`;
    const params = { $quantity: quantity, $id: id };

    const statement = await db.prepareAsync(query);
    try {
        await statement.executeAsync(params);
        console.log("Cart updated successfully");
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};

export const deleteCartItem = async (id: number) => {
    const db = await getDBConnection();
    const query = `DELETE FROM cart WHERE id = $id`;
    const params = { $id: id };

    const statement = await db.prepareAsync(query);
    try {
        await statement.executeAsync(params);
        console.log("Cart item deleted successfully");
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};

export const getCartItems = async (userId: number) => {
    const db = await getDBConnection();
    const query = `SELECT cart.id, products.name, products.description,products.imgUrl, products.price, cart.quantity
                   FROM cart
                   JOIN products ON cart.productId = products.id
                   WHERE cart.userId = $userId`;
    const params = { $userId: userId };

    const statement = await db.prepareAsync(query);
    try {
        const result = await statement.executeAsync(params);
        const cartItems = await result.getAllAsync();
        return cartItems;
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};
