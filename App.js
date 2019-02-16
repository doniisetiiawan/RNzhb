import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import ErrorModal from './ErrorModal';
import ConfirmationAlert from './ConfirmationAlert';

class App extends Component {
  state = {
    data: fromJS({
      modalVisible: false,
      alertVisible: false,
    }),
  };

  get data() {
    return this.state.data;
  }

  set data(data) {
    this.setState({ data });
  }

  toggleModal = () => {
    this.data = this.data.update('modalVisible', v => !v);
  };

  toggleAlert = () => {
    this.data = this.data.update('alertVisible', v => !v);
  };

  render() {
    const { modalVisible, alertVisible } = this.data.toJS();
    const { toggleModal, toggleAlert } = this;

    return (
      <View style={styles.container}>
        <ErrorModal
          animationType="fade"
          visible={modalVisible}
          onPressConfirm={toggleModal}
          onPressCancel={toggleModal}
        />
        <ConfirmationAlert
          message="Failed to do the thing..."
          visible={alertVisible}
          buttons={[
            {
              text: 'Dismiss',
              onPress: toggleAlert,
            },
          ]}
        />

        <Text
          style={styles.text}
          onPress={toggleModal}
        >Show Error Modal
        </Text>
        <Text
          style={styles.text}
          onPress={toggleAlert}
        >Show Error Alert
        </Text>
      </View>
    );
  }
}

export default App;
