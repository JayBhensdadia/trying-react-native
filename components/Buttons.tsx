import React from 'react'
import { View, StyleSheet } from 'react-native'
import MyButton from '@/components/ui/MyButton';

interface ButtonsProp {
    inputHandler: (str: string) => void;
    clearInput: () => void;
    backspace: () => void;
    calculateAns: () => void;
}

const Buttons = ({ inputHandler, clearInput, backspace, calculateAns }: ButtonsProp) => {
    return (
        <View style={{ flexGrow: 1, display: 'flex', gap: 15, marginTop: 50 }}>
            <View style={styles.row}>
                <View style={styles.wideBtn}>
                    <MyButton title="AC" onPress={clearInput} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="⌫" onPress={backspace} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="÷" onPress={() => inputHandler("/")} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.btn}>
                    <MyButton title="7" onPress={() => inputHandler("7")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="8" onPress={() => inputHandler("8")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="9" onPress={() => inputHandler("9")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="x" onPress={() => inputHandler("*")} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.btn}>
                    <MyButton title="4" onPress={() => inputHandler("4")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="5" onPress={() => inputHandler("5")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="6" onPress={() => inputHandler("6")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="-" onPress={() => inputHandler("-")} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.btn}>
                    <MyButton title="1" onPress={() => inputHandler("1")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="2" onPress={() => inputHandler("2")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="3" onPress={() => inputHandler("3")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="+" onPress={() => inputHandler("+")} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.btn}>
                    <MyButton title="0" onPress={() => inputHandler("0")} />
                </View>
                <View style={styles.btn}>
                    <MyButton title="." onPress={() => inputHandler(".")} />
                </View>
                <View style={styles.wideBtn}>
                    <MyButton title="=" onPress={calculateAns} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: 5, marginHorizontal: 5 },
    wideBtn: {
        width: "50%"
    },
    btn: {
        width: '25%'
    }
})

export default Buttons
