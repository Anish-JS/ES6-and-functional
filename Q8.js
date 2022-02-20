const arr = ["You", "all", "are", "rockstars"];

const convertToObj = (arr) =>
  arr.reduce((acc, word, currIndex) => ({ ...acc, [currIndex]: word }), {});

console.log(convertToObj(arr));
