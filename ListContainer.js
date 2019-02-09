import React, { Component } from 'react';

import * as api from './api';
import List from './List';

class ListContainer extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = () => api
    .fetchItems()
    .then(resp => resp.json())
    .then(({ items }) => this.setState(state => ({
      data: [
        ...state.data,
        ...items.map((value, i) => ({
          key: i.toString(),
          value,
        }))],
    })));


  render() {
    const { data } = this.state;

    return (
      <List data={data} fetchItems={this.fetchItems} />
    );
  }
}

export default ListContainer;
