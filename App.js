import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Home';
import Details from './Details';

const AppNavigator = createStackNavigator(
  {
    Home,
    Details,
  },
  { initialRouteName: 'Home' },
);

export default createAppContainer(AppNavigator);
