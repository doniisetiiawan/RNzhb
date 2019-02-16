import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, ActivityIndicator } from 'react-native';

import styles from './styles';

const Activity = props => (
  <Modal visible={props.visible} transparent>
    <View style={styles.modalContainer}>
      <ActivityIndicator size={props.size} />
    </View>
  </Modal>
);

Activity.propTypes = {
  size: PropTypes.string,
  visible: PropTypes.bool,
};

Activity.defaultProps = {
  size: 'large',
  visible: false,
};

export default Activity;
