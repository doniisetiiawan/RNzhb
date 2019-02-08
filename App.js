import { createBottomTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import Home from './Home';
import News from './News';
import Settings from './Settings';

const { createNavigator } = Platform.select({
  android: { createNavigator: createBottomTabNavigator },
  ios: { createNavigator: createDrawerNavigator },
});

const AppNavigator = createNavigator(
  {
    Home,
    News,
    Settings,
  },
  { initialRouteName: 'Home' },
);

export default createAppContainer(AppNavigator);
