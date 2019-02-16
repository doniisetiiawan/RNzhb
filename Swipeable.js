import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, Text, TouchableOpacity, View,
} from 'react-native';

import styles from './styles';

const onScroll = onSwipe => e => e.nativeEvent.contentOffset.x === 200 && onSwipe();

const scrollProps = {
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  scrollEventThrottle: 10,
};

const Swipeable = ({ onSwipe, name }) => (
  <View style={styles.swipeContainer}>
    <ScrollView
      {...scrollProps}
      onScroll={onScroll(onSwipe)}
    >
      <TouchableOpacity>
        <View style={styles.swipeItem}>
          <Text style={styles.swipeItemText}>{name}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.swipeBlank} />
    </ScrollView>
  </View>
);

Swipeable.propTypes = {
  name: PropTypes.string.isRequired,
  onSwipe: PropTypes.func.isRequired,
};

export default Swipeable;
