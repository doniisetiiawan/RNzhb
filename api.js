/* eslint-disable import/prefer-default-export */
function* genItems() {
  let cnt = 0;

  while (true) {
    yield `Item ${cnt += 1}`;
  }
}

const items = genItems();

export const fetchItems = () => Promise.resolve({
  json: () => Promise.resolve({
    items: new Array(20).fill(null)
      .map(() => items.next().value),
  }),
});
