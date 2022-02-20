const inventory = [
  { name: "fans", quantity: 3 },
  { name: "chimneys", quantity: 0 },
  { name: "bulbs", quantity: 5 },
  { name: "stove", quantity: 1 },
];

const quantLessThan2 = (inventory) =>
  inventory.reduce((acc, i) => (i.quantity < 2 ? [...acc, i] : [...acc]), []);

const sumOfQuant = (inventory) =>
  inventory.reduce((acc, i) => (acc += i.quantity), 0);

const quantityZero = (inventory) => inventory.filter((i) => i.quantity === 0);

console.log(quantityZero(inventory));
