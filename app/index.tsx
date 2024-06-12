import AdminScreen from '@/screens/AdminScreen';
import Calculator from '@/screens/Calculator';
import CartScreen from '@/screens/CartScreen';
import CategoriesScreen from '@/screens/Categories';
import CounterScreen from '@/screens/Counter';
import FlexDemoScreen from '@/screens/FlexDemo';
import HelloWorldScreen from '@/screens/HelloWorld';
import InputDemoScreen from '@/screens/InputDemo';
import LoginScreen from '@/screens/LoginScreen';
import MainScreen from '@/screens/MainScreen';
import PlatFormScreen from '@/screens/PlatformScreen';
import ProductListScreen from '@/screens/ProductListScreen';
import RegisterScreen from '@/screens/RegisterScreen';
import TodoList from '@/screens/TodoList';
import TrendingScreen from '@/screens/Trending';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect } from 'react';
import { SQLiteProvider, useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import { createTables } from '@/db/database';

const Stack = createNativeStackNavigator();




export default function HomeScreen() {


  // useEffect(() => {
  //   const initializeDB = async () => {
  //     await initDatabase();
  //   };

  //   initializeDB();
  // }, []);

  return (



    // <Stack.Navigator initialRouteName='Main'>
    //   <Stack.Screen name="Main" component={MainScreen} />
    //   <Stack.Screen name="FlexDemo" component={FlexDemoScreen} />
    //   <Stack.Screen name="InputDemo" component={InputDemoScreen} />
    //   <Stack.Screen name="CounterDemo" component={CounterScreen} />
    //   <Stack.Screen name="HelloWorld" component={HelloWorldScreen} />
    //   <Stack.Screen name="Categories" component={CategoriesScreen} />
    //   <Stack.Screen name="Trending" component={TrendingScreen} />
    //   <Stack.Screen name="Platform" component={PlatFormScreen} />
    //   <Stack.Screen name="Calculator" component={Calculator} />
    //   <Stack.Screen name="TodoList" component={TodoList} />
    // </Stack.Navigator>


    <SQLiteProvider databaseName="mydb2" onInit={createTables}>


      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="ProductListScreen"
          component={ProductListScreen}
          options={{ headerBackVisible: false }}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} options={{ headerBackVisible: false }} />



        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="FlexDemo" component={FlexDemoScreen} />
        <Stack.Screen name="InputDemo" component={InputDemoScreen} />
        <Stack.Screen name="CounterDemo" component={CounterScreen} />
        <Stack.Screen name="HelloWorld" component={HelloWorldScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Trending" component={TrendingScreen} />
        <Stack.Screen name="Platform" component={PlatFormScreen} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="TodoList" component={TodoList} />

      </Stack.Navigator>
    </SQLiteProvider>


    // <InputDemoScreen />
    // <CounterScreen />
  );
}

