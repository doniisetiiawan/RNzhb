import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, Text } from 'react-native';

import styles from './styles';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  state = {
    visible: false,
  };

  timer = null;

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const modalProps = {
      animationType: 'fade',
      transparent: true,
      visible: this.state.visible,
    };

    return (
      <Modal {...modalProps}>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationInner}>
            <Text>{this.props.message}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

export default Notification;
