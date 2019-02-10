import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View } from 'react-native';
import { fromJS } from 'immutable';

import styles from './styles';

const Input = (props) => {
  const { label } = props;

  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
};

Input.defaultProps = {
  label: '',
};

Input.propTypes = {
  label: PropTypes.string,
};

class App extends Component {
  state = {
    data: fromJS({
      changedText: '',
      submittedText: '',
    }),
  };

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const { changedText, submittedText } = this.data.toJS();

    return (
      <View style={styles.container}>
        <Input label="Basic Text Input:" />
        <Input
          label="Password Input:"
          secureTextEntry
        />
        <Input
          label="Return Input:"
          returnKeyType="search"
        />
        <Input
          label="Placeholder Text:"
          placeholder="search"
        />
        <Input
          label="Input Events:"
          onChangeText={(e) => {
            this.data = this.data.set('changedText', e);
          }}
          onSubmitEditing={(e) => {
            this.data = this.data.set(
              'submittedText',
              e.nativeEvent.text,
            );
          }}
          onFocus={() => {
            this.data = this.data
              .set('changedText', '')
              .set('submittedText', '');
          }}
        />

        <Text>Changed: {changedText}</Text>
        <Text>Submitted: {submittedText}</Text>
      </View>
    );
  }
}

export default App;
