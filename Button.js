import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, TouchableOpacity } from 'react-native';

import styles from './styles';

const touchables = new Map([
  ['opacity', TouchableOpacity],
  ['highlight', TouchableHighlight],
  [undefined, TouchableOpacity],
]);

const Button = ({ label, onPress, touchable }) => {
  const Touchable = touchables.get(touchable);

  const touchableProps = {
    style: styles.button,
    underlayColor: 'rgba(112,128,144,0.3)',
    onPress,
  };

  return (
    <Touchable {...touchableProps}>
      <Text style={styles.buttonText}> {label} </Text>
    </Touchable>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  touchable: PropTypes.oneOf(['opacity', 'highlight']).isRequired,
};

export default Button;
