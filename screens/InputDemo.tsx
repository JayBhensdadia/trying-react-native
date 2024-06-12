import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const InputDemoScreen = () => {

    const [text, setText] = useState('');
    return (


        <View style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>{text}</Text>
            <TextInput
                style={{
                    width: 100,
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                onChangeText={(newText) => setText(newText)}
                value={text}
                placeholder='type here'
            />
        </View>

    );
};


export default InputDemoScreen