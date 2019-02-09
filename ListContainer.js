/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';

import List from './List';

const mapItems = items => items.map((value, i) => ({ key: i.toString(), value }));

const filterAndSort = (data, text, asc) => data
  .filter(i => text.length === 0 || i.includes(text))
  .sort(asc
    ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
    : (a, b) => (a > b ? -1 : a === b ? 0 : 1));

class ListContainer extends Component {
  state = {
    data: filterAndSort(
      new Array(100).fill(null).map((v, i) => `Item ${i}`),
      '',
      true,
    ),
    asc: true,
    filter: '',
  };

  render() {
    const { data, asc, filter } = this.state;

    return (
      <List
        data={mapItems(data)}
        asc={asc}
        onFilter={(text) => {
          this.setState({
            filter: text,
            data: filterAndSort(data, text, asc),
          });
        }}
        onSort={() => {
          this.setState({
            asc: !asc,
            data: filterAndSort(
              data,
              filter,
              !asc,
            ),
          });
        }}
      />
    );
  }
}

export default ListContainer;
