/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const loading = Wrapped => class LoadingWrapper extends Component {
  static propTypes = {
    promise: PropTypes.instanceOf(Promise).isRequired,
  };

  state = {
    loading: true,
  };

  componentDidMount() {
    const { promise } = this.props;

    promise.then(
      () => this.setState({ loading: false }),
      () => this.setState({ loading: false }),
    );
  }

  render() {
    return new Map([
      [
        true,
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>,
      ],
      [false, <Wrapped {...this.props} />],
    ]).get(this.state.loading);
  }
};

export default loading;
