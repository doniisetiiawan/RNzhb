/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  ActivityIndicator, ScrollView, Switch, Text, View,
} from 'react-native';

import styles from './styles';

export default () => (
  <View style={styles.container}>
    <ScrollView style={styles.scroll}>
      {new Array(6).fill(null).map((v, i) => (
        <View key={i}>
          <Text style={[styles.scrollItem, styles.text]}>Some text</Text>
          <ActivityIndicator style={styles.scrollItem} size="large" />
          <Switch style={styles.scrollItem} />
        </View>
      ))}
    </ScrollView>
  </View>
);
