// src/models.ts

export interface User {
    id: number;
    username: string;
    password: string;
    isAdmin: number;
}

export interface Product {
    id: number;
    name: string;
    description: string | null;
    price: number;
    imgUrl?: string;
}


export interface CartItem {
    id: number;
    productId: number;
    userId: number;
    quantity: number;
}
