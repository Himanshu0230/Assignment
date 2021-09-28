import React from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/store';
import LoginScreen from './components/LoginScreen';
import CardScreen from './components/CardScreen';
import DetailScreen from './components/DetailScreen';
import ItemScreen from './components/ItemScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Card" component={CardScreen} />
                    <Stack.Screen name="Detail" component={DetailScreen}/>
                    <Stack.Screen name="Item" component={ItemScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;