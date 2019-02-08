import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
