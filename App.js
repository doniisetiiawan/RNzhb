import React, { Component } from 'react';
import {
  NetInfo, Switch, Text, View,
} from 'react-native';

import { fromJS } from 'immutable';
import styles from './styles';
import { get, set } from './store';

const boolMap = {
  true: true,
  false: false,
};

class App extends Component {
  state = {
    data: fromJS({
      message: null,
      first: false,
      second: false,
      third: false,
    }),
  };

  componentDidMount() {
    NetInfo.getConnectionInfo().then(() => get().then(
      (items) => {
        this.data = this.data.merge(items);
      },
      (err) => {
        this.data = this.data.set('message', err);
      },
    ));
  }

  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  save = key => (value) => {
    set(key, value).then(
      (connected) => {
        this.data = this.data
          .set('message', connected ? null : 'Saved Offline')
          .set(key, value);
      },
      (err) => {
        this.data = this.data.set('message', err);
      },
    );
  };

  render() {
    const { save } = this;
    const {
      message, first, second, third,
    } = this.data.toJS();

    return (
      <View style={styles.container}>
        <Text>{message}</Text>
        <View>
          <Text>First</Text>
          <Switch
            value={boolMap[first.toString()]}
            onValueChange={save('first')}
          />
        </View>
        <View>
          <Text>Second</Text>
          <Switch
            value={boolMap[second.toString()]}
            onValueChange={save('second')}
          />
        </View>
        <View>
          <Text>Third</Text>
          <Switch
            value={boolMap[third.toString()]}
            onValueChange={save('third')}
          />
        </View>
      </View>
    );
  }
}

export default App;
