import React from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }: { navigation: any; }) => {
    const exercises = [
        { title: 'Exercise-1: Hello World', screen: 'HelloWorld' },
        { title: 'Exercise-2: Input Demo', screen: 'InputDemo' },
        { title: 'Exercise-3: Flex Demo', screen: 'FlexDemo' },
        { title: 'Exercise-4: Counter Demo', screen: 'CounterDemo' },
        { title: 'Exercise-5: Categories Screen', screen: 'Categories' },
        { title: 'Exercise-6: Trending Screen', screen: 'Trending' },
        { title: 'Exercise-7: Platform Screen', screen: 'Platform' },
        { title: 'Exercise-8: Calculator', screen: 'Calculator' },
        { title: 'Exercise-9: Todo List', screen: 'TodoList' },
        { title: 'Exercise-10: Shopping App', screen: 'LoginScreen' },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={exercises}
                keyExtractor={(item) => item.screen}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => navigation.navigate(item.screen)}
                    >
                        <Text style={styles.listItemText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    listItem: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#373A40',
        borderRadius: 5,
        elevation: 1,
    },
    listItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffff',
    },
});

export default MainScreen;
