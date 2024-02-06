/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainNavigation from './src/Route/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer independent>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
