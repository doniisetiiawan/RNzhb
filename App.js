/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import Select from './Select';

class App extends Component {
  state = {
    data: fromJS({
      sizes: [
        { label: '', value: null },
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
        { label: 'XL', value: 'XL' },
      ],
      selectedSize: null,
      garments: [
        { label: '', value: null, sizes: ['S', 'M', 'L', 'XL'] },
        { label: 'Socks', value: 1, sizes: ['S', 'L'] },
        { label: 'Shirt', value: 2, sizes: ['M', 'XL'] },
        { label: 'Pants', value: 3, sizes: ['S', 'L'] },
        { label: 'Hat', value: 4, sizes: ['M', 'XL'] },
      ],
      availableGarments: [],
      selectedGarment: null,
      selection: '',
    }),
  };

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const {
      sizes,
      selectedSize,
      availableGarments,
      selectedGarment,
      selection,
    } = this.data.toJS();

    return (
      <View style={styles.container}>
        <Select
          label="Size"
          items={sizes}
          selectedValue={selectedSize}
          onValueChange={(size) => {
            this.data = this.data
              .set('selectedSize', size)
              .set('selectedGarment', null)
              .set(
                'availableGarments',
                this.data
                  .get('garments')
                  .filter(i => i.get('sizes').includes(size)),
              );
          }}
        />
        <Select
          label="Garment"
          items={availableGarments}
          selectedValue={selectedGarment}
          onValueChange={(garment) => {
            this.data = this.data.set('selectedGarment', garment).set(
              'selection',
              `${this.data.get('selectedSize')
              } ${
                this.data
                  .get('garments')
                  .find(i => i.get('value') === garment)
                  .get('label')}`,
            );
          }}
        />
        <Text style={styles.selection}>{selection}</Text>
      </View>
    );
  }
}

export default App;
