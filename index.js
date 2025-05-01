/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */
/**
 * @format
 */

import './gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// eslint-disable-next-line no-undef
if (__DEV__) {
  require('./ReactotronConfig');
}

AppRegistry.registerComponent(appName, () => App);
