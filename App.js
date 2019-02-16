import React, { Component } from 'react';
import { View } from 'react-native';

import { fromJS } from 'immutable';
import styles from './styles';
import Swipeable from './Swipeable';

class App extends Component {
  state = {
    data: fromJS(
      new Array(8)
        .fill(null)
        .map((v, id) => ({ id, name: 'Swipe me...' })),
    ),
  };

  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  onSwipe = id => () => {
    this.data = this.data.filterNot(v => v.get('id') === id);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.data.toJS().map(i => (
          <Swipeable
            key={i.id}
            onSwipe={this.onSwipe(i.id)}
            name={i.name}
          />
        ))}
      </View>
    );
  }
}

export default App;
