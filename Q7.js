const arr = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

const sumOfAges = (arr) => arr.reduce((acc, person) => (acc += person.age), 0);

console.log(sumOfAges(arr));
