/* eslint-disable no-shadow */
import React, { Component } from 'react';
import {
  AsyncStorage, FlatList, Text, TextInput, View,
} from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Button from './Button';

class App extends Component {
  state = {
    data: fromJS({
      key: null,
      value: null,
      source: [],
    }),
  };

  componentDidMount() {
    this.loadItems();
  }

  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  setItem = () => AsyncStorage.setItem(this.data.get('key'), this.data.get('value'))
    .then(() => {
      this.data = this.data.delete('key')
        .delete('value');
    })
    .then(() => this.loadItems());

  clearItems = () => AsyncStorage.clear()
    .then(() => this.loadItems());

  async loadItems() {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);

    this.data = this.data.set('source', fromJS(values));
  }

  render() {
    const { source, key, value } = this.data.toJS();

    return (
      <View style={styles.container}>
        <Text>Key:</Text>
        <TextInput
          style={styles.input}
          value={key}
          onChangeText={(v) => {
            this.data = this.data.set('key', v);
          }}
        />
        <Text>Value:</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(v) => {
            this.data = this.data.set('value', v);
          }}
        />
        <View style={styles.controls}>
          <Button label="Add" onPress={this.setItem} />
          <Button label="Clear" onPress={this.clearItems} />
        </View>
        <View style={styles.list}>
          <FlatList
            data={source.map(([key, value]) => ({
              key: key.toString(),
              value,
            }))}
            renderItem={({ item: { value, key } }) => (
              <Text>{value} ({key})</Text>
            )}
          />
        </View>
      </View>
    );
  }
}

export default App;
