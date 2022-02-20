const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];

// const haveCycle = (family) =>
//   family
//     .filter((famMem) => (famMem.haveCycle ? true : false))
//     .map((fam) => fam.name);

const haveCycle = (fam) =>
  fam.reduce(
    (acc, famMem) => (famMem.haveCycle ? [...acc, famMem.name] : [...acc]),
    []
  );

console.log(haveCycle(family));
