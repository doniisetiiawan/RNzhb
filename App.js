/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { fromJS } from 'immutable';
import styles from './styles';
import Notification from './Notification';

class App extends Component {
  state = {
    data: fromJS({
      count: 0,
      message: null,
    }),
  };

  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const { count, message } = this.data.toJS();

    return (
      <View style={styles.container}>
        <Notification message={message} />
        <Text onPress={() => {
          this.data = this.data
            .update('count', c => c + 1)
            .set('message', null);
        }}
        >Procced {count}
        </Text>
        <Text onPress={() => {
          this.data = this.data
            .set('message', 'Something happened...');
        }}
        >Show notification
        </Text>
      </View>
    );
  }
}

export default App;
