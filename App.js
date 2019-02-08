import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Home';
import Settings from './Settings';

const AppNavigator = createStackNavigator(
  {
    Home,
    Settings,
  },
  { initialRouteName: 'Home' },
);

export default createAppContainer(AppNavigator);
