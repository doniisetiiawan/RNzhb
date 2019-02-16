import React, { Component } from 'react';
import { View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Switch from './Switch';

class App extends Component {
  state = {
    data: fromJS({
      first: false,
      second: false,
    }),
  };

  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const { first, second } = this.state.data.toJS();

    return (
      <View style={styles.container}>
        <Switch
          label="Disable Next Switch"
          value={first}
          disabled={second}
          onValueChange={(v) => {
            this.data = this.data.set('first', v);
          }}
        />
        <Switch
          label="Disable Previous Switch"
          value={second}
          disabled={first}
          onValueChange={(v) => {
            this.data = this.data.set('second', v);
          }}
        />
      </View>
    );
  }
}

export default App;
