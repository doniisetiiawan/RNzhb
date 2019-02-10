import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import First from './First';
import Second from './Second';
import Third from './Third';

const AppNavigator = createStackNavigator({
  First: {
    screen: props => (
      <First
        promise={new Promise(resolve => setTimeout(resolve, 1000))}
        {...props}
      />
    ),
  },
  Second: {
    screen: props => (
      <Second
        promise={new Promise(resolve => setTimeout(resolve, 1000))}
        {...props}
      />
    ),
  },
  Third: {
    screen: props => (
      <Third
        promise={new Promise(resolve => setTimeout(resolve, 1000))}
        {...props}
      />
    ),
  },
},
{ initialRouteName: 'First' });

export default createAppContainer(AppNavigator);
