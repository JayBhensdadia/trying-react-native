import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    TextInput,
    Button,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Task {
    id: string;
    text: string;
}

const TodoList = () => {
    const [task, setTask] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@tasks');
            const loadedTasks: Task[] = jsonValue != null ? JSON.parse(jsonValue) : [];
            setTasks(loadedTasks);
        } catch (e) {
            console.error('Error fetching tasks', e);
        }
    };

    const storeData = async (tasks: Task[]) => {
        try {
            const jsonValue = JSON.stringify(tasks);
            await AsyncStorage.setItem('@tasks', jsonValue);
        } catch (e) {
            console.error('Error saving tasks', e);
        }
    };

    const addTask = () => {
        if (task.length > 0) {
            const newTasks = [...tasks, { id: Date.now().toString(), text: task }];
            setTasks(newTasks);
            setTask('');
            storeData(newTasks);
        }
    };

    const removeTask = (id: string) => {
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
        storeData(filteredTasks);
    };

    const clearAllTasks = async () => {
        try {
            await AsyncStorage.clear();
            setTasks([]);
        } catch (e) {
            console.error('Error clearing tasks', e);
        }
    };

    const renderItem = ({ item }: { item: Task }) => (
        <View style={styles.taskItem}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task"
                    value={task}
                    onChangeText={setTask}
                />
                <Button title="Add" onPress={addTask} />
            </View>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.clearContainer}>
                <Button title="Clear All" onPress={clearAllTasks} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    deleteButton: {
        color: 'red',
    },
    clearContainer: {
        marginTop: 20,
    },
});

export default TodoList;
