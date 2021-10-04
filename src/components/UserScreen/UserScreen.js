import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { View, ActionBar } from "react-native-ui-lib";
import auth from '@react-native-firebase/auth';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const UserScreen = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            headerShown={true}
            name="Profile"
            component={ProfileScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20
},
})
 
export default UserScreen;