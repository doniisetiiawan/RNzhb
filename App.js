import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Activity from './Activity';

class App extends Component {
  state = {
    data: fromJS({
      fetching: false,
      promise: Promise.resolve(),
    }),
  };

  onPressx = () => {
    this.data = this.data.merge({
      promise: new Promise(resolve => setTimeout(resolve, 3000)).then(
        () => {
          this.data = this.data.set('fetching', false);
        },
      ),
      fetching: true,
    });
  };

  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    return (
      <View style={styles.container}>
        <Activity visible={this.data.get('fetching')} />
        <Text onPress={this.onPressx}>Fetch stuff...</Text>
      </View>
    );
  }
}

export default App;
