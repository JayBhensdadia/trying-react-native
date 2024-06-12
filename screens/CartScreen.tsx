import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Pressable, Image } from 'react-native';
import { getCartItems, deleteCartItem } from '@/services/cart-service';
import ProductComponent from '@/components/Product';
import { MaterialIcons } from '@expo/vector-icons';

const CartScreen = ({ navigation, route }: { navigation: any, route: any; }) => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const { userId } = route.params;


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 10 }}>

                    <Pressable onPress={() => { }} style={styles.headerButton} >
                        <MaterialIcons name="shopping-cart-checkout" size={24} color="black" />
                        {/* <Text  >Checkout</Text> */}
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
            // fetchCartItems();
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

                    <ProductComponent
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        quantity={item.quantity}
                        onRemove={() => handleRemoveItem(item.id)}
                    />

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

    headerButton: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        // width: 90,
        textAlign: 'center',
        padding: 10
    },
});

export default CartScreen;
