import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import GreenfieldHome from '../app/index';
import App from './App';

registerRootComponent(App);
AppRegistry.registerComponent('GreenfieldHome', () => GreenfieldHome);