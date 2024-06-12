import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FlexDemoScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 1</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 2</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.boxText}>Box 3</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={[styles.box, styles.boxRow]}>
                    <Text style={styles.boxText}>1</Text>
                </View>
                <View style={[styles.box, styles.boxRow]}>
                    <Text style={styles.boxText}>2</Text>
                </View>
                <View style={[styles.box, styles.boxRow]}>
                    <Text style={styles.boxText}>3</Text>
                </View>
            </View>
            <View style={styles.centeredContainer}>
                <Text style={styles.centeredText}>Centered Text</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'lightgray',
        margin: 35,
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    boxRow: {
        flex: 1,
        margin: 5,
    },
    boxText: {
        color: 'white',
        textAlign: 'center',
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightcoral',
    },
    centeredText: {
        fontSize: 24,
        color: 'white',
    },
});
