import React from 'react';

import { Provider } from 'react-redux';

import { Navigation } from 'react-native-navigation';

//
// internal modules
import store from './redux/store.redux';
import { registerScreens, registerScreenVisibilityListener } from './screens';

const instaceStore = store.configure();
registerScreens(instaceStore, Provider);
registerScreenVisibilityListener();

const navigatorStyle = {
  statusBarTextColorScheme: 'light', // 'dark' / 'light'
  statusBarColor: '#002C59', // Android only

  navBarTextColor: '#fff', // Android only
  navBarBackgroundColor: '#002C59',
  orientation: 'portrait'
};

export default class App extends React.Component {
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
          orientation: 'portrait'
        },
        animationType: 'fade'
      }
    });
  }
}