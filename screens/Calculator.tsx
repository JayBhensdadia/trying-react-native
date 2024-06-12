import Buttons from '@/components/Buttons';
import { validateMyInput } from '@/utils/validate';
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const Calculator = () => {

    const [input, setInput] = useState('');
    const [ans, setAns] = useState('');


    const inputHandler = (str: string) => {

        if (validateMyInput(input + str, input)) {
            setInput(prev => prev + str)
        }

    }
    const clearInput = () => {
        setInput(prev => '');
        setAns(prev => '');
    }
    const backspace = () => { setInput(prev => prev.substring(0, prev.length - 1)) }
    const calculateAns = () => {
        console.log('hi there');
        try {
            const tempAns = eval(input);
            console.log(tempAns);
            setAns(String(tempAns));
        } catch (error) {
            console.error("Invalid expression", error);
            setAns('ERROR');
        }
    }


    return (
        <View style={{
            display: 'flex',
            gap: 10
        }}>

            <TextInput
                style={{
                    width: '100%',
                    height: 50,
                    borderColor: 'gray',
                    borderWidth: 0,
                    fontSize: 36,
                    textAlign: 'right',
                    paddingHorizontal: 25,
                }}
                value={input}
                placeholder='0'
                editable={false}
                selectTextOnFocus={false}

            />
            <TextInput
                style={{
                    width: '100%',
                    height: 100,
                    borderColor: 'gray',
                    color: 'black',
                    fontWeight: 'bold',
                    borderWidth: 0,
                    fontSize: 72,
                    textAlign: 'right',
                    paddingHorizontal: 25,

                }}
                value={ans}
                placeholder='0'
                editable={false}
                selectTextOnFocus={false}

            />


            <Buttons inputHandler={inputHandler} clearInput={clearInput} backspace={backspace} calculateAns={calculateAns} />

        </View>
    )
}

export default Calculator