import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';
import { ProgressBarComponent, progressProps } from './ProgressBarComponent';

const ProgressLabel = ({ show, progress }) => new Map([
  [
    true,
    <Text style={styles.progressText}>
      {Math.round(progress * 100)}%
    </Text>,
  ],
  [false, null],
]).get(show);

const ProgressBar = ({ progress, label }) => (
  <View style={styles.progress}>
    <ProgressLabel show={label} progress={progress} />
    <ProgressBarComponent
      {...progressProps}
      style={styles.progress}
      progress={progress}
    />
  </View>
);

ProgressBar.propTypes = {
  label: PropTypes.bool,
  progress: PropTypes.number,
};

ProgressBar.defaultProps = {
  label: true,
  progress: 0,
};

export default ProgressBar;
