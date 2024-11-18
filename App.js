import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/pages/LoginPage';
import SignUpPage from './src/pages/SignUpPage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage"
      screenOptions={{
        headerShown: false, // Hide header for all screens in the stack
      }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="SignUpPage" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
