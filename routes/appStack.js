import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../container/home';
import About from '../container/about';
const AppStack = createNativeStackNavigator();
export default AppStackNavigator = () => {
    return (
        <AppStack.Navigator initialRouteName="HomeScreen">
            <AppStack.Screen name="HomeScreen" component={HomeScreen} />
            <AppStack.Screen name="AboutScreen" component={About} />
        </AppStack.Navigator>
    );
};
