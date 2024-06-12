// src/database.ts

import * as SQLite from 'expo-sqlite';






// let db: SQLite.SQLiteDatabase | null = null;


export const connectToDatabase = async () => {
    return SQLite.openDatabaseAsync('mydb2');
};

// export const initDatabase = async () => {
//     try {
//         console.log("Attempting to open database...");
//         db = await SQLite.openDatabaseAsync(
//             'my-database'
//         );

//         console.log("Database opened successfully");

//         await createTables();
//     } catch (error) {
//         console.error("Error opening database", error);
//     }
// };

export const createTables = async (db: SQLite.SQLiteDatabase) => {
    console.log('init......');

    if (!db) {
        console.error("Database is not initialized");
        return;
    }

    const query_users = `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        isAdmin INTEGER NOT NULL
    );`;

    const query_products = `CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        price REAL NOT NULL,
        imgUrl TEXT
    );`;


    const query_cart = `CREATE TABLE IF NOT EXISTS cart (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        productId INTEGER NOT NULL,
        userId INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY (productId) REFERENCES products(id),
        FOREIGN KEY (userId) REFERENCES users(id)
    );`;

    try {
        await db.execAsync(query_users);
        await db.execAsync(query_products);
        await db.execAsync(query_cart);

        console.log("Tables created successfully");
    } catch (error) {
        console.error("Error creating tables", error);
    }
};


