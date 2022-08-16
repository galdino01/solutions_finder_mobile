import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './src/redux/Reducers';

import GettingStarted from './src/pages/GettingStarted';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import UserProfile from './src/pages/UserProfile';

const Stack = createStackNavigator();
const store = createStore(Reducers);
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GettingStarted">
          <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
