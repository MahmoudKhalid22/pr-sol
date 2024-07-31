// MEMORY LIMIT EXCEED
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("", (input) => {
//   const res = input.split("").sort().join("");

//   const letterCount = {};

//   for (let x of res.split("")) {
//     letterCount[x] = letterCount[x]
//       ? (letterCount[x] += 1)
//       : (letterCount[x] = 1);
//   }

//   for (let [key, value] of Object.entries(letterCount)) {
//     console.log(key + " : " + value);
//   }

//   rl.close();
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  // Create an object to store the count of each letter
  const letterCount = {};

  // Iterate through the input string and count each letter
  for (const char of input) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  // Get the keys (letters) and sort them alphabetically
  const sortedLetters = Object.keys(letterCount).sort();

  // Print each letter and its count
  for (const char of sortedLetters) {
    console.log(`${char} : ${letterCount[char]}`);
  }

  rl.close();
});
