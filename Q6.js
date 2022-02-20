const arr = [1, 2, 3, 7, 5, 6, 8, 9];

const productOfEven = (arr) =>
  arr.reduce(
    (acc, currNum) => (currNum % 2 === 0 ? (acc = acc * currNum) : acc),
    1
  );

console.log(productOfEven(arr));
