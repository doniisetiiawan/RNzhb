/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

class App extends Component {
  state = {
    date: new Date(),
    time: new Date(),
  };

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          label="Pick a date:"
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
        />
        <TimePicker
          label="Pick a time, any time:"
          date={this.state.time}
          onTimeChange={time => this.setState({ time })}
        />
      </View>
    );
  }
}

export default App;
