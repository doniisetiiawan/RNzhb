/* eslint-disable no-nested-ternary,import/prefer-default-export */
const items = new Array(100).fill(null)
  .map((v, i) => `Item ${i}`);

const filterAndSort = (data, text, asc) => data
  .filter(i => text.length === 0 || i.includes(text))
  .sort(
    asc
      ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
      : (a, b) => (a > b ? -1 : a === b ? 0 : 1),
  );

export const fetchItems = (filter, asc) => new Promise((resolve) => {
  resolve({
    json: () => Promise.resolve({
      items: filterAndSort(items, filter, asc),
    }),
  });
});
