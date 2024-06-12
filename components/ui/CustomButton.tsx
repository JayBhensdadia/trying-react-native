import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export function CustomButton({ onPress, title }: {
    onPress: () => void,
    title: string;
}) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',

    },
    text: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
