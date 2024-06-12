
import { Button, Text, View } from 'react-native';

const MainScreen = ({ navigation }: { navigation: any; }) => {
    return (
        <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>


            <Button
                title='Exercise-1: Hello World'
                onPress={() => {
                    navigation.navigate('HelloWorld');
                }}
            />

            <Button
                title='Exercise-2: Input Demo'
                onPress={() => {
                    navigation.navigate('InputDemo');
                }}
            />
            <Button
                title='Exercise-3: Flex Demo'
                onPress={() => {
                    navigation.navigate('FlexDemo');
                }}
            />
            <Button
                title='Exercise-4: Counter Demo'
                onPress={() => {
                    navigation.navigate('CounterDemo');
                }}
            />

            <Button
                title='Exercise-5: Categories Screen'
                onPress={() => {
                    navigation.navigate('Categories');
                }}
            />
            <Button
                title='Exercise-6: Trending Screen'
                onPress={() => {
                    navigation.navigate('Trending');
                }}
            />
            <Button
                title='Exercise-7: Platform Screen'
                onPress={() => {
                    navigation.navigate('Platform');
                }}
            />

            <Button
                title='Exercise-8: Calculator'
                onPress={() => {
                    navigation.navigate('Calculator');
                }}
            />

            <Button
                title='Exercise-9: Todo List'
                onPress={() => {
                    navigation.navigate('TodoList');
                }}
            />

            <Button
                title='Exercise-10: Shopping App'
                onPress={() => {
                    navigation.navigate('LoginScreen');
                }}
            />
        </View>
    );
};

export default MainScreen;