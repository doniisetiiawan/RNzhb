import React from 'react';
import { Text, View, DatePickerIOS } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DatePicker = props => (
  <View style={styles.datePickerContainer}>
    <Text style={styles.datePickerLabel}>{props.label}</Text>
    <DatePickerIOS mode="date" {...props} />
  </View>
);

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
};

export default DatePicker;
