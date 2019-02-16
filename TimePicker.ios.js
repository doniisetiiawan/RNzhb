import React from 'react';
import PropTypes from 'prop-types';
import { Text, DatePickerIOS, View } from 'react-native';

import styles from './styles';

const DatePicker = props => (
  <View style={styles.datePickerContainer}>
    <Text style={styles.datePickerLabel}>{props.label}</Text>
    <DatePickerIOS
      mode="time"
      date={props.date}
      onDateChange={props.onTimeChange}
    />
  </View>
);

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  label: PropTypes.string.isRequired,
  onTimeChange: PropTypes.func.isRequired,
};

export default DatePicker;
