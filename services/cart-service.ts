// src/services/cartService.ts
import { connectToDatabase as getDBConnection } from '@/db/database';
import { CartItem } from '@/db/model';

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


// export const addToCart = async (productId: number, userId: number, quantity: number) => {
//     const db = await getDBConnection();

//     // First, check if the product is already in the cart for this user
//     const checkQuery = `SELECT * FROM cart WHERE productId = $productId AND userId = $userId`;
//     const checkParams = { $productId: productId, $userId: userId };

//     const checkStatement = await db.prepareAsync(checkQuery);

//     try {
//         const existingEntry = await checkStatement.executeAsync(checkParams);

//         if (existingEntry) {
//             // If the product is already in the cart, update the quantity
//             const updateQuery = `UPDATE cart SET quantity = quantity + $quantity WHERE productId = $productId AND userId = $userId`;
//             const updateParams = { $quantity: quantity, $productId: productId, $userId: userId };

//             const updateStatement = await db.prepareAsync(updateQuery);
//             try {
//                 await updateStatement.executeAsync(updateParams);
//                 console.log("Cart updated successfully");
//             } finally {
//                 await updateStatement.finalizeAsync();
//             }
//         } else {
//             // If the product is not in the cart, insert a new entry
//             const insertQuery = `INSERT INTO cart (productId, userId, quantity) VALUES ($productId, $userId, $quantity)`;
//             const insertParams = { $productId: productId, $userId: userId, $quantity: quantity };

//             const insertStatement = await db.prepareAsync(insertQuery);
//             try {
//                 await insertStatement.executeAsync(insertParams);
//                 console.log("Item added to cart successfully");
//             } finally {
//                 await insertStatement.finalizeAsync();
//             }
//         }
//     } catch (error) {
//         throw error;
//     } finally {
//         await checkStatement.finalizeAsync();
//     }
// };


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

// Adjust the import path as necessary




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
