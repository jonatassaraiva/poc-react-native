import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import { registerScreens, registerScreenVisibilityListener } from './screens';

registerScreens();
registerScreenVisibilityListener();

const navigatorStyle = {
  statusBarTextColorScheme: 'light', // 'dark' / 'light'
  statusBarColor: '#002C59', // Android only

  navBarTextColor: '#fff', // Android only
  navBarBackgroundColor: '#002C59',
  orientation: 'portrait'
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.startApp();
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'PocReactNative.Home',
        navigatorStyle: {
          ...navigatorStyle,
          navBarHidden: true,
          orientation: 'portrait',
          screenBackgroundColor: '#002C59'
        },
        animationType: 'fade'
      }
    });
  }
}