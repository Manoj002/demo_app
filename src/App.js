import 'react-native-gesture-handler';
import React from 'react';
import {StoreProvider} from './store/Store';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigators';

const App = () => {
  return (
    <NavigationContainer>
      <StoreProvider>
        <AppNavigator />
      </StoreProvider>
    </NavigationContainer>
  );
};

export default App;
