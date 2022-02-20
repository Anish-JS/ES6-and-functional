const input = [
  ["a", "b", "c"],
  ["c", "d", "e"],
  ["e", "d", "f"],
];

const flatten = (input) => input.reduce((acc, i) => [...acc, ...i], []);

console.log(flatten(input));
