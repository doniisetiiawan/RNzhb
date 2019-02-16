/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  Image, Slider, Text, View,
} from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';

class App extends Component {
  state = {
    data: fromJS({
      source: require('./images/flux.png'),
      width: 100,
      height: 100,
    }),
  };

  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const { source, width, height } = this.data.toJS();
    return (
      <View style={styles.container}>
        <Image source={source} style={{ width, height }} />
        <Text>Width: {width}</Text>
        <Text>Height: {height}</Text>
        <Slider
          style={styles.slider}
          minimumValue={50}
          maximumValue={200}
          value={width}
          onValueChange={(v) => {
            this.data = this.data.merge({
              width: v,
              height: v,
            });
          }}
        />
      </View>
    );
  }
}

export default App;
