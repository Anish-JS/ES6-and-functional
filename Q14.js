const input = "anish";

const vowels = ["a", "e", "i", "o", "u"];

const listOfChars = input.split("");

const toggleCase = (listOfChars) =>
  listOfChars.map((c) =>
    vowels.includes(c) ? c.toUpperCase() : c.toLowerCase()
  );

console.log(toggleCase(listOfChars).join(""));
