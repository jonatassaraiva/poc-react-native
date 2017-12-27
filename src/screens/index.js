import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

import HomeScreen from './home/home.screen';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('PocReactNative.Home', () => HomeScreen, store, Provider);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({
      screen, startTime, endTime, commandType
    }) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`)
  }).register();
}