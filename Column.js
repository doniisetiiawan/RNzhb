import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const Column = ({ children }) => (
  <View style={styles.column}>{children}</View>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Column;
