import { Component } from 'react';
import { Alert } from 'react-native';

const actions = new Map(
  [[true, Alert.alert], [false, () => {}]],
);

class ConfirmationAlert extends Component {
  state = {
    visible: false,
    title: '',
    message: '',
    buttons: [],
  };

  static getDerivedStateFromProps(nextProps) {
    return nextProps;
  }

  render() {
    actions.get(this.state.visible)(
      this.state.title,
      this.state.message,
      this.state.buttons,
    );

    return null;
  }
}

export default ConfirmationAlert;
