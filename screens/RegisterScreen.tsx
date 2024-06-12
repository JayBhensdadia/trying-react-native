// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Switch, StyleSheet, Pressable } from 'react-native';
import { register } from '@/services/auth-service';
import { Header } from '@/components/ui/Header';
import { SubHeader } from '@/components/ui/SubHeader';
import { CustomInput } from '@/components/ui/CustomInput';
import { CustomSwitch } from '@/components/ui/CustomSwitch';
import { CustomButton } from '@/components/ui/CustomButton';

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
            <Header title='Register' />
            <SubHeader title='Nice to have you onboard!' />

            <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
                type='text'
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                type='password'

            />

            <CustomSwitch title='is Admin?' value={isAdmin} setValue={setIsAdmin} />


            <CustomButton title='Register' onPress={handleRegister} varient='default' />


            <CustomButton title='Back to Login' onPress={() => navigation.navigate('LoginScreen')} varient='outline' />

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

});

export default RegisterScreen;
