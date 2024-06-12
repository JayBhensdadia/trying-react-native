import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Pressable, Image } from 'react-native';
import { getProducts } from '@/services/product-service';
import { addToCart, getCartItems } from '@/services/cart-service';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { CustomButton } from '@/components/ui/CustomButton';
import ProductComponent from '@/components/Product';

const ProductListScreen = ({ navigation, route }: { navigation: any, route: any; }) => {
    const [products, setProducts] = useState<any[]>([]);
    const { userId } = route.params;

    const [cartItemsCount, setCartItemsCount] = useState<number>(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsList = await getProducts();
                setProducts(productsList);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const fetchCartItems = async () => {
                try {
                    const cItems = await getCartItems(userId);
                    setCartItemsCount(cItems.length);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchCartItems();
        }, [])
    );

    const handleLogout = () => {
        navigation.navigate('LoginScreen');
    };

    const handleViewCart = () => {
        navigation.navigate('CartScreen', { userId });
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                    <Pressable onPress={handleViewCart} style={[styles.headerButton, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
                        <AntDesign name="shoppingcart" size={24} color="black" />

                        <Text style={styles.headerBtnText}>Cart</Text>
                        {cartItemsCount > 0 && (
                            <View style={[styles.cartBadge, { backgroundColor: 'red' }]}>
                                <Text style={styles.cartBadgeText}>{cartItemsCount}</Text>
                            </View>
                        )}
                    </Pressable>

                    <Pressable onPress={handleLogout} style={[styles.headerButton, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
                        <AntDesign name="logout" size={24} color="black" />

                    </Pressable>




                </View>
            ),
        });
    }, [navigation, cartItemsCount]);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (

                    <ProductComponent
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        onAddToCart={async () => {
                            await addToCart(item.id, userId, 1);
                            setCartItemsCount(prevCount => prevCount + 1);
                        }}
                    />


                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 10
    },
    headerBtnText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5
    },
    headerButton: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: 100,
        textAlign: 'center',
        padding: 5
    },

    btnText: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    cartBadge: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    cartBadgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ProductListScreen;
