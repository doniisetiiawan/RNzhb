import { ToastAndroid } from 'react-native';
import { Map } from 'immutable';

const show = (message, duration) => {
  ToastAndroid.show(message, duration);
  return null;
};

const Notification = ({ message, duration }) => Map([[null, null], [undefined, null]]).get(
  message,
  show(message, duration),
);

Notification.defaultProps = {
  duration: ToastAndroid.LONG,
};

export default Notification;
