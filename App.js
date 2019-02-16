import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import LazyImage from './LazyImage';
import Button from './Button';

const remote = 'https://facebook.github.io/react-native/docs/assets/favicon.png';

class App extends Component {
  state = {
    source: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <LazyImage
          style={{ width: 200, height: 100 }}
          resizeMode="contain"
          source={this.state.source}
        />
        <Button
          label="Load Remote"
          onPress={() => {
            this.setState({
              source: { uri: remote },
            });
          }}
        />
      </View>
    );
  }
}

export default App;
