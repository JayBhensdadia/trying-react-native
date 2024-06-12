import { StyleSheet, Platform, Text, View, Button } from 'react-native';

export default function HelloWorldScreen() {
    return (
        <View style={styles.rootView}>
            <Text style={styles.title}>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: '900'
    },
    rootView: {
        backgroundColor: 'cyan',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
