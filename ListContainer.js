/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';

import { fetchItems } from './api';
import List from './List';

const mapItems = items => items.map((value, i) => ({ key: i.toString(), value }));

class ListContainer extends Component {
  state = {
    data: [],
    asc: true,
    filter: '',
  };

  componentDidMount() {
    const { filter, asc } = this.state;

    fetchItems(filter, asc)
      .then(resp => resp.json())
      .then(({ items }) => {
        this.setState({ data: mapItems(items) });
      });
  }

  render() {
    const { data, asc, filter } = this.state;

    return (
      <List
        data={data}
        asc={asc}
        onFilter={(text) => {
          fetchItems(text, asc)
            .then(resp => resp.json())
            .then(({ items }) => {
              this.setState({
                filter: text,
                data: mapItems(items),
              });
            });
        }}
        onSort={() => {
          fetchItems(filter, !asc)
            .then(resp => resp.json())
            .then(({ items }) => {
              this.setState({
                asc: !asc,
                data: mapItems(items),
              });
            });
        }}
      />
    );
  }
}

export default ListContainer;
