import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);
