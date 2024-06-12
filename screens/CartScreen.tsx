import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Pressable, Image } from 'react-native';
import { getCartItems, deleteCartItem } from '@/services/cart-service';

const CartScreen = ({ navigation, route }: { navigation: any, route: any; }) => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const { userId } = route.params;


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 10 }}>

                    <Pressable onPress={() => { }} >
                        <Text style={styles.headerButton} >Checkout</Text>
                    </Pressable>
                </View>
            ),
        });
    }, []);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getCartItems(userId);
                setCartItems(items);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCartItems();
    }, [userId]);

    // Function to handle removing an item from the cart
    const handleRemoveItem = async (id: number) => {
        try {
            await deleteCartItem(id);
            // Refresh cart items after removing an item
            const updatedCartItems = cartItems.filter(item => item.id !== id);
            setCartItems(updatedCartItems);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>

            {cartItems.length == 0 ? <Text style={{ textAlign: 'center', fontSize: 26, color: 'gray' }}>The cart is empty!!</Text> : <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>

                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>

                            {/* <Text style={styles.productPrice}>{item.imgUrl}</Text> */}
                            <Image source={{ uri: item.imgUrl }} style={{ width: 150, height: 150, borderWidth: 10, borderRadius: 20, backgroundColor: '#fff' }} />

                            <View style={{ display: 'flex' }}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                                <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                                <Pressable
                                    style={styles.removeButton}
                                    onPress={() => handleRemoveItem(item.id)}>
                                    <Text style={styles.removeButtonText}>Remove</Text>
                                </Pressable>
                            </View>
                        </View>

                        {/* <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                        
                        <Text style={styles.itemQuantity}>img: {item.imgUrl}</Text> */}

                    </View>
                )}
            />}


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 10
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10,
    },
    itemContainer: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 16,
        color: 'gray',
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    itemQuantity: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    removeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: 'red',
        marginTop: 5,
        minWidth: 200
    },
    removeButtonText: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    headerButton: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: 90,
        textAlign: 'center',
        padding: 5
    },
});

export default CartScreen;
