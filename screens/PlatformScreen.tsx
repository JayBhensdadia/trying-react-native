import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function PlatFormScreen() {
    return (
        <View style={styles.container}>
            {Platform.OS == 'android' ? <Text>hello android</Text> : <Text>hello ios</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'lightgray',
        margin: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

});
