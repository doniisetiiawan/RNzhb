import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

const placeholder = require('./images/flux.png');

const Placeholder = props => new Map([
  [true, null],
  [false, <Image {...props} source={placeholder} />],
]).get(props.loaded);

class LazyImage extends Component {
  static propTypes = {
    style: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  render() {
    const {
      props: {
        style: { width, height },
      },
      state: { loaded },
    } = this;

    return (
      <View style={{ width, height }}>
        <Placeholder loaded={loaded} {...this.props} />
        <Image
          {...this.props}
          onLoad={() => this.setState({ loaded: true })}
        />
      </View>
    );
  }
}

export default LazyImage;
