// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Switch, StyleSheet, Pressable } from 'react-native';
import { register } from '@/services/auth-service';

const RegisterScreen = ({ navigation }: { navigation: any; }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleRegister = async () => {
        try {
            await register(username, password, isAdmin);
            Alert.alert('Registration Successful', 'You can now log in');
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.log(error);
            Alert.alert('Registration Error');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Register</Text>
            <Text style={styles.subHeader}>nice to have you onboard!</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <View style={[styles.switchContainer, styles.input]}>
                <Text>is Admin?</Text>
                <Switch value={isAdmin} onValueChange={setIsAdmin} />
            </View>
            <Pressable onPress={handleRegister} style={styles.button}>
                <Text style={styles.btnText}>Register</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('LoginScreen')} style={styles.backButton}>
                <Text style={styles.backBtnText}>Back to Login</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: "flex",
        gap: 10,
        padding: 20,
        marginTop: 150
    },
    subHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 30
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'black',
    },
    btnText: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
    },
    backBtnText: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
});

export default RegisterScreen;
