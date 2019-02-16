import React, { Component } from 'react';
import {
  View, Picker, FlatList, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { fromJS } from 'immutable';
import styles from './styles';
import iconNames from './icon-names.json';

class App extends Component {
  state = {
    data: fromJS({
      selected: 'Web Application Icons',
      icons: iconNames,
      listSource: [],
    }),
  };

  componentDidMount() {
    this.updateListSource(this.data.get('selected'));
  }

  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  updateListSource = (selected) => {
    this.data = this.data
      .update('listSource', listSource => this.data.getIn([
        'icons',
        selected,
      ]))
      .set('selected', selected);
  };

  render() {
    const { updateListSource } = this;
    const selected = this.data.get('selected');
    const categories = this.data
      .get('icons')
      .keySeq()
      .toJS();
    const listSource = this.data.get('listSource');

    return (
      <View style={styles.container}>
        <View style={styles.picker}>
          <Picker
            selectedValue={selected}
            onValueChange={updateListSource}
          >
            {categories.map(c => (
              <Picker.PickerItem key={c} label={c} value={c} />
            ))}
          </Picker>
        </View>
        <FlatList
          style={styles.icons}
          data={listSource
            .map((value, key) => ({ key: key.toString(), value }))
            .toJS()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Icon name={item.value} style={styles.itemIcon} />
              <Text style={styles.itemText}>{item.value}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default App;
