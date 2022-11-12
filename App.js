
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages
import MyEventsPage from './pages/MyEvents'
import Map from './pages/Map'
import LoginPage from './pages/auth/Login'



const Stack = createBottomTabNavigator();

const MyStack = () => {
  return (
    <LoginPage />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={Map}
    //       options={{ title: 'Motive' }}
    //     />
    //     <Stack.Screen name="Events" component={MyEventsPage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};


export default MyStack;

