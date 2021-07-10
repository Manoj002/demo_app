import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Account, Profile} from '../screens';
import Strings from '../constants/Strings';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Strings.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Strings.HOME} component={Home} />
      <Stack.Screen name={Strings.PROFILE} component={Profile} />
      <Stack.Screen name={Strings.ACCOUNT} component={Account} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
