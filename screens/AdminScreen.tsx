import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable, Modal, TouchableOpacity, Image } from 'react-native';
import { getProducts, addProduct, updateProduct, deleteProduct } from '@/services/product-service';
import ProductComponent from '@/components/Product';
import { AntDesign } from '@expo/vector-icons';

const AdminScreen = ({ navigation }: { navigation: any; }) => {
    const [products, setProducts] = useState<any[]>([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newImgUrl, setNewImgUrl] = useState('');
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [imgUrl, setImgUrl] = useState('');

    const fetchProducts = async () => {
        try {
            const productsList = await getProducts();
            setProducts(productsList);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => setShowAddModal(true)} style={[styles.headerButton, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
                        <AntDesign name="pluscircleo" size={24} color="black" />
                        {/* <Text style={styles.headerButton}>Add Product</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogout} style={[styles.headerButton, { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
                        <AntDesign name="logout" size={24} color="black" />

                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={handleLogout}>
                        <Text style={styles.headerButton}>logout</Text>
                    </TouchableOpacity> */}
                </View>
            ),
        });
    }, [navigation]);

    const handleAddProduct = async () => {
        try {
            await addProduct(name, description, parseFloat(price), newImgUrl);
            setName('');
            setDescription('');
            setPrice('');
            setNewImgUrl('');
            setShowAddModal(false);
            fetchProducts();
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateProduct = async () => {
        try {
            await updateProduct(selectedProduct.id, newName, newDescription, parseFloat(newPrice), newImgUrl);
            fetchProducts();
            setShowUpdateModal(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteProduct = async (id: number) => {
        try {
            await deleteProduct(id);
            fetchProducts();
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        navigation.navigate('LoginScreen');
    };

    const openUpdateModal = (item: any) => {
        setSelectedProduct(item);
        setNewName(item.name);
        setNewDescription(item.description);
        setNewPrice(item.price.toString());
        setNewImgUrl(item.imgUrl || ''); // Ensure existing imgUrl is set or default to empty string
        setShowUpdateModal(true);
    };

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
                        onUpdate={() => openUpdateModal(item)}
                        onDelete={() => handleDeleteProduct(item.id)}
                    />

                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={showUpdateModal}
                onRequestClose={() => setShowUpdateModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={newName}
                            onChangeText={setNewName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            value={newDescription}
                            onChangeText={setNewDescription}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Price"
                            value={newPrice}
                            onChangeText={setNewPrice}
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Image URL"
                            value={newImgUrl}
                            onChangeText={setNewImgUrl}
                        />
                        <Pressable style={styles.updateButton} onPress={handleUpdateProduct}>
                            <Text style={styles.btnText}>OK</Text>
                        </Pressable>
                        <Pressable style={styles.deleteButton} onPress={() => setShowUpdateModal(false)}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showAddModal}
                onRequestClose={() => setShowAddModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            value={description}
                            onChangeText={setDescription}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Price"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Image URL"
                            value={imgUrl}
                            onChangeText={setImgUrl}
                        />
                        <Pressable style={styles.updateButton} onPress={handleAddProduct}>
                            <Text style={styles.btnText}>OK</Text>
                        </Pressable>
                        <Pressable style={styles.deleteButton} onPress={() => setShowAddModal(false)}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20
    },
    headerButton: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        padding: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10, marginBottom: 10,
    },
    productContainer: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
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
        marginVertical: 5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'black',
        marginBottom: 10,
    },
    updateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'black',
        marginBottom: 5,
        minWidth: 200
    },
    deleteButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'red',
        minWidth: 200
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    btnText: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default AdminScreen;

