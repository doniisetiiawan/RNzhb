/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

import styles from './styles';

const App = ({ reactSource, relaySource }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={reactSource} />
    <Image style={styles.image} source={relaySource} />
  </View>
);

const sourceProp = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string.isRequired,
  }),
  PropTypes.number,
]).isRequired;

App.propTypes = {
  reactSource: sourceProp,
  relaySource: sourceProp,
};

App.defaultProps = {
  reactSource: {
    uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
  },
  relaySource: require('./images/relay.png'),
};

export default App;
