/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text>{navigation.getParam('title')}</Text>
  </View>
);
