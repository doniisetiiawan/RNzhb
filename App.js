/* eslint-disable react/destructuring-assignment,react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import ProgressBar from './ProgressBar';

class App extends Component {
  state = {
    progress: 0,
  };

  componentDidMount() {
    const updateProgress = () => {
      this.setState({
        progress: this.state.progress + 0.01,
      });

      if (this.state.progress < 1) {
        setTimeout(updateProgress, 300);
      }
    };

    updateProgress();
  }


  render() {
    const { progress } = this.state;

    return (
      <View style={styles.container}>
        <ProgressBar progress={progress} />
      </View>
    );
  }
}

export default App;
