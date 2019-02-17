import React, { Component } from 'react';
import { NetInfo, Text, View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';

const connectedMap = {
  none: 'Disconnected',
  unknown: 'Disconnected',
  wifi: 'Connected',
  cell: 'Connected',
  mobile: 'Connected',
};

class App extends Component {
  state = {
    data: fromJS({
      connected: '',
    }),
  };

  componentDidMount() {
    NetInfo.addEventListener(
      'connectionChange',
      this.onNetworkChange,
    );
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.onNetworkChange,
    );
  }


  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  onNetworkChange = (connection) => {
    this.data = this.data.set(
      'connected',
      connectedMap[connection.type],
    );
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>{this.data.get('connected')}</Text>
      </View>
    );
  }
}

export default App;
