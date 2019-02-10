/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';

const URL = 'https://maps.google.com/maps/api/geocode/json?latlng=';

class App extends Component {
  state = {
    data: fromJS({
      address: 'loading...',
    }),
  };

  componentDidMount() {
    const setPosition = (pos) => {
      this.data = this.data.merge(pos.coords);

      const {
        coords: { latitude, longitude },
      } = pos;

      fetch(`${URL}${latitude},${longitude}`)
        .then(resp => resp.json(), e => console.error(e))
        .then(({ results: [{ formattedAddress }] }) => {
          this.data = this.data.set('address', formattedAddress);
        });
    };

    navigator.geolocation.getCurrentPosition(setPosition);

    this.watcher = navigator.geolocation.watchPosition(
      setPosition,
      err => console.error(err),
      { enableHighAccuracy: true },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watcher);
  }

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const state = [...this.data.sortBy((v, k) => k).entries()];

    return (
      <View style={styles.container}>
        {state.map(([k, v]) => (
          <Text key={k} style={styles.label}>
            {`${k[0].toUpperCase()}${k.slice(1)}`}: {v}
          </Text>
        ))}
      </View>
    );
  }
}

export default App;
