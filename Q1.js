const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const addOneToEven = (arr) => arr.map((num) => (num % 2 === 0 ? num + 1 : num));

console.log(addOneToEven(arr));
