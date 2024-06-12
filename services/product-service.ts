import { connectToDatabase as getDBConnection } from "@/db/database";

export const addProduct = async (name: string, description: string, price: number, imgUrl?: string) => {
    const db = await getDBConnection();
    const query = `INSERT INTO products (name, description, price, imgUrl) VALUES ($name, $description, $price, $imgUrl)`;
    const params = { $name: name, $description: description, $price: price, $imgUrl: imgUrl || '' };

    const statement = await db.prepareAsync(query);
    try {
        await statement.executeAsync(params);
        console.log("Product added successfully");
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};

export const updateProduct = async (id: number, name: string, description: string, price: number, imgUrl?: string) => {
    const db = await getDBConnection();
    const query = `UPDATE products SET name = $name, description = $description, price = $price, imgUrl = $imgUrl WHERE id = $id`;
    const params = { $name: name, $description: description, $price: price, $id: id, $imgUrl: imgUrl || '' };

    const statement = await db.prepareAsync(query);
    try {
        await statement.executeAsync(params);
        console.log("Product updated successfully");
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};

export const deleteProduct = async (id: number) => {
    const db = await getDBConnection();
    const query = `DELETE FROM products WHERE id = $id`;
    const params = { $id: id };

    const statement = await db.prepareAsync(query);
    try {
        await statement.executeAsync(params);
        console.log("Product deleted successfully");
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};

export const getProducts = async () => {
    const db = await getDBConnection();
    const query = `SELECT * FROM products`;

    const statement = await db.prepareAsync(query);
    try {
        const result = await statement.executeAsync();
        const products = await result.getAllAsync();
        return products;
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};
