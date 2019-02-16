import React from 'react';
import { Text, View, DatePickerAndroid } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const pickDate = (options, onDateChange) => {
  DatePickerAndroid.open(options).then(
    date => onDateChange(new Date(date.year, date.month, date.day)),
  );
};

const DatePicker = ({ label, date, onDateChange }) => (
  <View style={styles.datePickerContainer}>
    <Text style={styles.datePickerLabel}>{label}</Text>
    <Text
      onPress={() => pickDate({ date }, onDateChange)}
    >{date.toLocaleString()}
    </Text>
  </View>
);

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  label: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DatePicker;
