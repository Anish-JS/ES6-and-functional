const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const lessThan8AndEven = (arr) =>
  arr.filter((num) => num % 2 === 0 && num <= 8);

console.log(lessThan8AndEven(arr));
