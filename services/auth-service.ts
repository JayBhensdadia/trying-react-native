// src/services/authService.ts
import { connectToDatabase as getDBConnection } from "@/db/database";
import { User } from "@/db/model";

export const login = async (username: string, password: string): Promise<User> => {
    const db = await getDBConnection();
    const query = `SELECT * FROM users WHERE username = $username AND password = $password`;
    const params = { $username: username, $password: password };

    const statement = await db.prepareAsync(query);
    try {
        const result = await statement.executeAsync(params);
        const user = await result.getFirstAsync() as User;

        if (user) {
            return user;
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};
export const register = async (username: string, password: string, isAdmin: boolean) => {
    const db = await getDBConnection();
    const query = `INSERT INTO users (username, password, isAdmin) VALUES ($username, $password, $isAdmin)`;
    const params = { $username: username, $password: password, $isAdmin: isAdmin ? 1 : 0 };

    const statement = await db.prepareAsync(query);
    try {
        await statement.executeAsync(params);
        console.log("User registered successfully");
    } catch (error) {
        throw error;
    } finally {
        await statement.finalizeAsync();
    }
};
