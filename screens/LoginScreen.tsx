// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable } from 'react-native';
import { login } from '@/services/auth-service';
import MyButton from '@/components/ui/MyButton';

const LoginScreen = ({ navigation }: { navigation: any; }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const user = await login(username, password);
            if (user.isAdmin) {
                navigation.navigate('AdminScreen');
            } else {
                navigation.navigate('ProductListScreen', { userId: user.id });
            }
        } catch (error) {
            console.log(error);

            Alert.alert('Login Error');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <Text style={styles.subHeader}>goot to see you again!</Text>
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

            <Pressable onPress={handleLogin} style={styles.button}>
                <Text style={styles.btnText}>Login</Text>
            </Pressable>


            <Pressable onPress={() => navigation.navigate('RegisterScreen')} style={styles.backButton}   >
                <Text style={styles.backBtnText} >don't have account? Register</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Main')} style={styles.backButton}   >
                <Text style={styles.backBtnText} >{`back to main app`}</Text>
            </Pressable>

            {/* <MyButton title="Login" onPress={handleLogin} /> */}
            {/* <MyButton title="Register" onPress={() => navigation.navigate('RegisterScreen')} /> */}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: "flex",
        marginTop: 150,
        gap: 20,
        padding: 20
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    subHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 30
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 10
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
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
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


export default LoginScreen;
