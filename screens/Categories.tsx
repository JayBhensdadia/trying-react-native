import React, { useState } from 'react';
import { View, TextInput, SectionList, Text, StyleSheet, SafeAreaView, Image, StatusBar } from 'react-native';

interface SubCategory {
    id: string;
    name: string;
    image: string;
}

interface Category {
    id: string;
    title: string;
    subCategories: SubCategory[];
}
const data: Category[] = [
    {
        id: '0',
        title: 'Fashion',
        subCategories: [
            { id: '1', name: "Men's Fashion", image: 'https://via.placeholder.com/100' },
            { id: '2', name: "Women's Fashion", image: 'https://via.placeholder.com/100' },
            { id: '3', name: 'Baby & Kids', image: 'https://via.placeholder.com/100' },
            { id: '4', name: 'Jewellery', image: 'https://via.placeholder.com/100' },
            { id: '5', name: 'Bags & Luggage', image: 'https://via.placeholder.com/100' },
            { id: '6', name: 'Sports, Fitness & Outdoor', image: 'https://via.placeholder.com/100' },
        ]
    },
    {
        id: '1',
        title: 'Electronics',
        subCategories: [
            { id: '7', name: 'Mobile Phones', image: 'https://via.placeholder.com/100' },
            { id: '8', name: 'Laptops', image: 'https://via.placeholder.com/100' },
            { id: '9', name: 'Cameras', image: 'https://via.placeholder.com/100' },
            { id: '10', name: 'Televisions', image: 'https://via.placeholder.com/100' },
            { id: '11', name: 'Headphones', image: 'https://via.placeholder.com/100' },
        ]
    },
    {
        id: '2',
        title: 'Home & Kitchen',
        subCategories: [
            { id: '12', name: 'Furniture', image: 'https://via.placeholder.com/100' },
            { id: '13', name: 'Home Decor', image: 'https://via.placeholder.com/100' },
            { id: '14', name: 'Kitchen Appliances', image: 'https://via.placeholder.com/100' },
            { id: '15', name: 'Bedding', image: 'https://via.placeholder.com/100' },
            { id: '16', name: 'Lighting', image: 'https://via.placeholder.com/100' },
        ]
    },
    {
        id: '3',
        title: 'Beauty & Health',
        subCategories: [
            { id: '17', name: 'Skincare', image: 'https://via.placeholder.com/100' },
            { id: '18', name: 'Haircare', image: 'https://via.placeholder.com/100' },
            { id: '19', name: 'Makeup', image: 'https://via.placeholder.com/100' },
            { id: '20', name: 'Fragrances', image: 'https://via.placeholder.com/100' },
            { id: '21', name: 'Health Supplements', image: 'https://via.placeholder.com/100' },
        ]
    },
    {
        id: '4',
        title: 'Sports & Outdoors',
        subCategories: [
            { id: '22', name: 'Exercise & Fitness', image: 'https://via.placeholder.com/100' },
            { id: '23', name: 'Outdoor Gear', image: 'https://via.placeholder.com/100' },
            { id: '24', name: 'Sportswear', image: 'https://via.placeholder.com/100' },
            { id: '25', name: 'Camping & Hiking', image: 'https://via.placeholder.com/100' },
            { id: '26', name: 'Cycling', image: 'https://via.placeholder.com/100' },
        ]
    },
    {
        id: '5',
        title: 'Books & Stationery',
        subCategories: [
            { id: '27', name: 'Fiction', image: 'https://via.placeholder.com/100' },
            { id: '28', name: 'Non-fiction', image: 'https://via.placeholder.com/100' },
            { id: '29', name: 'Textbooks', image: 'https://via.placeholder.com/100' },
            { id: '30', name: 'Stationery', image: 'https://via.placeholder.com/100' },
            { id: '31', name: 'Comics', image: 'https://via.placeholder.com/100' },
        ]
    },
    {
        id: '6',
        title: 'Toys & Games',
        subCategories: [
            { id: '32', name: 'Action Figures', image: 'https://via.placeholder.com/100' },
            { id: '33', name: 'Board Games', image: 'https://via.placeholder.com/100' },
            { id: '34', name: 'Dolls', image: 'https://via.placeholder.com/100' },
            { id: '35', name: 'Puzzles', image: 'https://via.placeholder.com/100' },
            { id: '36', name: 'Outdoor Play', image: 'https://via.placeholder.com/100' },
        ]
    },
];

const CategoriesScreen = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text: string) => {
        setSearchText(text);
        // You can implement your filtering logic here if needed
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>What are you looking for?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Search products & brands"
                    value={searchText}
                    onChangeText={handleSearch}
                />
            </View>
            <SectionList
                sections={data.map(category => ({
                    title: category.title,
                    data: category.subCategories,
                }))}
                keyExtractor={(item) => item.id}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )}
                contentContainerStyle={styles.grid}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (StatusBar.currentHeight! + 20) || 0,
        marginHorizontal: 20,
        backgroundColor: '#f8f8f8',
    },
    header: {
        padding: 15,
    },
    headerText: {
        color: '#000',
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
    },
    grid: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
        padding: 10,
        borderWidth: 2,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 5,
    },
    itemText: {
        textAlign: 'center',
        fontSize: 14,
    },
});

export default CategoriesScreen;
