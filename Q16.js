const input = [
  ["a", "b", "c"],
  ["c", "d", "e"],
  ["e", "d", "f"],
];

const flattenAndCount = (input) =>
  input
    .reduce((acc, i) => [...acc, ...i], [])
    .reduce(
      (acc, i) => (i in acc ? { ...acc, [i]: acc[i] + 1 } : { ...acc, [i]: 1 }),
      {}
    );
console.log(flattenAndCount(input));
