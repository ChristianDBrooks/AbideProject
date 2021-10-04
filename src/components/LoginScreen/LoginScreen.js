import React from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const LoginScreen = () => {
    return ( 
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Sign In" component={SignIn} />
                <Tab.Screen name="Sign Up" component={SignUp} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
 
export default LoginScreen;