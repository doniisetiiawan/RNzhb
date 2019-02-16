import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';
import ConfirmationModal from './ConfirmationModal';
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
        <ConfirmationModal
          animationType="fade"
          visible={modalVisible}
          onPressConfirm={toggleModal}
          onPressCancel={toggleModal}
        />
        <ConfirmationAlert
          title="Are you sure?"
          message="Fore realz?"
          visible={alertVisible}
          buttons={[
            {
              text: 'Nope',
              onPress: toggleAlert,
            },
            {
              text: 'Yep',
              onPress: toggleAlert,
            },
          ]}
        />

        <Text
          style={styles.text}
          onPress={toggleModal}
        >Show Confirmation Modal
        </Text>
        <Text
          style={styles.text}
          onPress={toggleAlert}
        >Show Confirmation Alert
        </Text>
      </View>
    );
  }
}

export default App;
