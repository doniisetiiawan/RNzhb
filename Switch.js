import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Text, View } from 'react-native';

import styles from './styles';

const CustomSwitch = props => (
  <View style={styles.customSwitch}>
    <Text>{props.label}</Text>
    <Switch {...props} />
  </View>
);

CustomSwitch.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CustomSwitch;
