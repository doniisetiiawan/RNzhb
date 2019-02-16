import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, View } from 'react-native';

import styles from './styles';

const ConfirmationModal = props => (
  <Modal {...props}>
    <View style={styles.modalContainer}>
      <View style={styles.modalInner}>
        <Text style={styles.modalText}>Dude, srsly?</Text>
        <Text
          style={styles.modalButton}
          onPress={props.onPressConfirm}
        >Yep
        </Text>
        <Text
          style={styles.modalButton}
          onPress={props.onPressCancel}
        >Nope
        </Text>
      </View>
    </View>
  </Modal>
);

ConfirmationModal.propTypes = {
  onPressCancel: PropTypes.func.isRequired,
  onPressConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;
