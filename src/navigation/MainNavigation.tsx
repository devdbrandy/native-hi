import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@holie/screens/home';
import LoginScreen from '@holie/screens/login';
import HolidaysScreen from '@holie/screens/holidays';
import {RouteStackParamList} from './routes';

const Stack = createNativeStackNavigator<RouteStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Holidays" component={HolidaysScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
