/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

import { fromJS } from 'immutable';
import styles from './styles';

const ipaRegion = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0695283 },
    { latitude: 43.8537168, longitude: -79.0700046 },
    { latitude: 43.8518394, longitude: -79.0725697 },
    { latitude: 43.8481651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0695283 },
  ],
  strokeColor: 'coral',
  strokeWidth: 4,
};

const stoutRegion = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0693283 },
    { latitude: 43.8517168, longitude: -79.0710046 },
    { latitude: 43.8518394, longitude: -79.0715697 },
    { latitude: 43.8491651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0693283 },
  ],
  strokeColor: 'firebrick',
  strokeWidth: 4,
};

class App extends Component {
  state = {
    data: fromJS({
      ipaStyles: [styles.ipaText, styles.boldText],
      stoutStyles: [styles.stoutText],
      overlays: [ipaRegion],
    }),
  };

  onClickIpa = () => {
    this.data = this.data
      .update('ipaStyles', i => i.push(styles.boldText))
      .update('stoutStyles', i => i.pop())
      .update('overlays', i => i.set(0, ipaRegion));
  };

  onClickStout = () => {
    this.data = this.data
      .update('stoutStyles', i => i.push(styles.boldText))
      .update('ipaStyles', i => i.pop())
      .update('overlays', i => i.set(0, stoutRegion));
  };

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const { ipaStyles, stoutStyles, overlays } = this.data.toJS();

    return (
      <View style={styles.container}>
        <View>
          <Text
            style={ipaStyles}
            onPress={this.onClickIpa}
          >IPA Fans
          </Text>
          <Text
            style={stoutStyles}
            onPress={this.onClickStout}
          >Stout Fans
          </Text>
        </View>

        <MapView
          style={styles.mapView}
          showsPointsOfInterest={false}
          showsUserLocation
          followUserLocation
        >
          {overlays.map((v, i) => (
            <MapView.Polygon
              key={i}
              coordinates={v.coordinates}
              strokeColor={v.strokeColor}
              strokeWidth={v.strokeWidth}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

export default App;
