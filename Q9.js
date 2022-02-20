const arr = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Potato",
  },
  {
    name: "Guava",
  },
  {
    name: "Capsicum",
  },
];

const AppendType = (arr) =>
  arr.map((item) =>
    item.name.length > 5
      ? { ...item, type: "vegetable" }
      : { ...item, type: "fruit" }
  );

console.log(AppendType(arr));
