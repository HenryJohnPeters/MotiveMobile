
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//pages
import MyEventsPage from './pages/MyEvents'
import Map from './pages/Map'

import LoginPage from './pages/auth/Login'
import RegisterPage from './pages/auth/Register'
import ForgotPasswordPage from './pages/auth/ForgotPassword'



const Stack = createBottomTabNavigator();
const loginStack = createNativeStackNavigator();

const MyStack = () => {
  const [modalEventsVisible, setModalEventsVisible] = useState(false);

  return (

    false ?
      <NavigationContainer>
        <loginStack.Navigator>
          <loginStack.Screen options={{
            title: '',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} name="Login" component={LoginPage} />
          <loginStack.Screen options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#00FFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} name="Register" component={RegisterPage} />
          <loginStack.Screen options={{
            title: 'Forgot Password',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#00FFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} name="ForgotPassword" component={ForgotPasswordPage} />
        </loginStack.Navigator>
      </NavigationContainer>
      :
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
            style: {
              backgroundColor: '#CE4418',
              paddingBottom: 3
            }
          }} >
          <Stack.Screen

            name="Home"
            component={Map}

          />
          <Stack.Screen name="Events" component={MyEventsPage} />
        </Stack.Navigator>
      </NavigationContainer >
    // <LoginPage />

  );
};


export default MyStack;

