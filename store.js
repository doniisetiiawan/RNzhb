/* eslint-disable no-const-assign */
import { NetInfo, AsyncStorage } from 'react-native';
import { Map as ImmutableMap } from 'immutable';

const fakeNetworkData = {
  first: false,
  second: false,
  third: false,
};

let connected = false;

const unsynced = [];

export const set = (key, value) => new Promise((resolve, reject) => {
  if (connected) {
    fakeNetworkData[key] = value;
    resolve(true);
  } else {
    AsyncStorage.setItem(key, value.toString())
      .then(
        () => {
          unsynced.push(key);
          resolve(false);
        },
        err => reject(err),
      );
  }
});

export const get = key => new Promise((resolve, reject) => {
  if (connected) {
    resolve(key ? fakeNetworkData[key] : fakeNetworkData);
  } else if (key) {
    AsyncStorage.getItem(key)
      .then(
        item => resolve(item),
        err => reject(err),
      );
  } else {
    AsyncStorage.getAllKeys()
      .then(
        keys => AsyncStorage.multiGet(keys)
          .then(
            items => resolve(ImmutableMap(items)
              .toJS()),
            err => reject(err),
          ),
        err => reject(err),
      );
  }
});

NetInfo.getConnectionInfo().then(
  (connection) => {
    connected = ['wifi', 'unknown'].includes(connection.type);
  },
  () => {
    connected = false;
  },
);

NetInfo.addEventListener('connectionChange', (connection) => {
  connected = ['wifi', 'unknown'].includes(connection.type);
  if (connected && unsynced.length) {
    AsyncStorage.multiGet(unsynced).then((items) => {
      items.forEach(([key, val]) => set(key, val));
      unsynced.length = 0;
    });
  }
});
