import React from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import AppRouter from './src/router/AppRouter';

const store = configureStore();

const reactnative = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

AppRegistry.registerComponent('reactnative', () => reactnative);
