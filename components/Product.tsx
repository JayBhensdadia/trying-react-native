// ProductComponent.tsx
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

interface ProductComponentProps {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    onAddToCart?: () => void;
    onUpdate?: () => void;
    onDelete?: () => void;
    quantity?: number;
    onRemove?: () => void;
}

const ProductComponent: React.FC<ProductComponentProps> = ({
    name,
    description,
    price,
    imgUrl,
    onAddToCart,
    onUpdate,
    onDelete,
    quantity,
    onRemove,
}) => {
    return (
        <View style={styles.productContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Image source={{ uri: imgUrl }} style={styles.productImage} />
                <View style={{ display: 'flex' }}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productDescription}>{description}</Text>
                    <Text style={styles.productPrice}>${price.toFixed(2)}</Text>




                    {onAddToCart && (
                        <Pressable style={styles.button} onPress={onAddToCart}>
                            <Text style={styles.btnText}>Add to Cart</Text>
                            <AntDesign name="shoppingcart" size={24} color="white" />
                        </Pressable>
                    )}
                    <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        {onUpdate && (
                            <Pressable style={styles.updateButton} onPress={onUpdate}>
                                <FontAwesome name="edit" size={20} color="white" />
                                {/* <Text style={styles.btnText}>Update</Text> */}
                            </Pressable>
                        )}
                        {onDelete && (
                            <Pressable style={styles.deleteButton} onPress={onDelete}>
                                <AntDesign name="delete" size={20} color="white" />
                                {/* <Text style={styles.btnText}>Delete</Text> */}
                            </Pressable>
                        )}
                    </View>

                    <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }} >
                        {quantity !== undefined && (
                            <Text style={styles.itemQuantity}>{quantity}</Text>
                        )}
                        {onRemove && (
                            <Pressable style={styles.deleteButton} onPress={onRemove}>
                                <AntDesign name="delete" size={20} color="white" />
                                {/* <Text style={styles.btnText}>Remove</Text> */}
                            </Pressable>
                        )}
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    productImage: {
        width: 150,
        height: 150,
        borderWidth: 10,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: 'white',
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 16,
        color: 'gray',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        minWidth: 200,
        elevation: 3,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginTop: 5,
    },
    updateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: 'black',
        // marginBottom: 5,
        // minWidth: 200,
        marginTop: 5,
    },
    deleteButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: 'red',
        // minWidth: 200,
        marginTop: 5,
    },
    removeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'red',
        minWidth: 200,
        marginTop: 5,
    },
    btnText: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    itemQuantity: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
        // marginBottom: 5,
        // minWidth: 200,
        // marginTop: 5,
        // marginVertical: 5,
    },
});

export default ProductComponent;
