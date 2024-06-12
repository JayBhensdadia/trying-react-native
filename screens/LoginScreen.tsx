
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable } from 'react-native';
import { login } from '@/services/auth-service';
import MyButton from '@/components/ui/MyButton';
import { CustomButton } from '@/components/ui/CustomButton';
import { CustomInput } from '@/components/ui/CustomInput';
import { Header } from '@/components/ui/Header';
import { SubHeader } from '@/components/ui/SubHeader';

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

            <Header title='Login' />
            <SubHeader title='Good to see you again!' />


            <CustomInput
                placeholder='Username'
                value={username}
                setValue={setUsername}
                type='text'
            />


            <CustomInput
                placeholder='Password'
                value={password}
                setValue={setPassword}
                type='password'
            />


            <CustomButton onPress={handleLogin} title='Login' varient='default' />


            <CustomButton onPress={() => navigation.navigate('RegisterScreen')} title='dont have account? Register' varient='outline' />



            <CustomButton onPress={() => navigation.navigate('Main')} title='back to main app!' varient='outline' />


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


});


export default LoginScreen;
