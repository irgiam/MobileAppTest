import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "../screens/Login";
import Register from '../screens/Register';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';

function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
              <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
      )
}

export default Routes