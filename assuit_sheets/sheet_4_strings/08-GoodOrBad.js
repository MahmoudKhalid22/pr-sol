const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numberOfWords = 0;
let words = [];

const getWords = () => {
  if (words.length < numberOfWords) {
    rl.question("", (word) => {
      words.push(word);
      getWords(); // Recursive call to handle the next word
    });
  } else {
    rl.close();
    checkWords();
  }
};

const checkWords = () => {
  for (let x of words) {
    if (x.includes("010") || x.includes("101")) {
      console.log("Good");
    } else {
      console.log("Bad");
    }
  }
};

rl.question("", (numOfWords) => {
  numberOfWords = parseInt(numOfWords);
  getWords();
});
