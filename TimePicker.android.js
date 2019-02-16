import React from 'react';
import PropTypes from 'prop-types';
import { Text, TimePickerAndroid, View } from 'react-native';

import styles from './styles';

const pickDate = (options, onTimeChange) => {
  TimePickerAndroid.open(options).then(
    time => onTimeChange(new Date(0, 0, 1, time.hour, time.minute)),
  );
};

const TimePicker = ({ label, date, onTimeChange }) => (
  <View style={styles.datePickerContainer}>
    <Text style={styles.datePickerLabel}>{label}</Text>
    <Text
      onPress={() => pickDate({ date }, onTimeChange)}
    >{date.toLocaleString()}
    </Text>
  </View>
);

TimePicker.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  label: PropTypes.string.isRequired,
  onTimeChange: PropTypes.func.isRequired,
};

export default TimePicker;
