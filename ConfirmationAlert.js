import { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

const actions = new Map(
  [[true, Alert.alert], [false, () => {}]],
);

class ConfirmationAlert extends Component {
  static propTypes = {
    buttons: PropTypes.array.isRequired,
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    actions.get(this.props.visible)(
      this.props.title,
      this.props.message,
      this.props.buttons,
    );
  }

  componentWillReceiveProps(nextProps) {
    actions.get(nextProps.visible)(
      nextProps.title,
      nextProps.message,
      nextProps.buttons,
    );
  }

  render() {
    return null;
  }
}

export default ConfirmationAlert;
