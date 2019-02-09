import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const arrows = new Map([[true, '▼'], [false, '▲']]);

const ListSort = ({ onSort, asc }) => (
  <Text onPress={onSort}>{arrows.get(asc)}</Text>
);

ListSort.propTypes = {
  asc: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default ListSort;
