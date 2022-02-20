const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const sumGreaterThan50 = (arr) =>
  arr.filter((num) => num > 50).reduce((acc, currNum) => (acc += currNum), 0);

console.log(sumGreaterThan50(arr));
