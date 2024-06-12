import React, { useState } from 'react'
import { Text, View } from 'react-native';
import MyButton from '@/components/ui/MyButton';

const CounterScreen = () => {

    const [count, setCount] = useState(0);
    return (
        <View style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Text style={{ fontSize: 72 }}>{count}</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2
            }}>
                <MyButton title='+' onPress={() => setCount(prev => prev + 1)} />
                <MyButton title='-' onPress={() => setCount(prev => prev - 1)} />
            </View>
        </View>
    )
}

export default CounterScreen