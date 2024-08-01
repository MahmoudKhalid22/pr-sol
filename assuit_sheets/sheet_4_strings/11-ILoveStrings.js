const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numberOfWords = 0;
const words = [];

const askForWords = () => {
  rl.question("", (input) => {
    numberOfWords = +input;
    if (words.length < numberOfWords) {
      rl.question("", (word) => {
        words.push(word);
        askForWords();
      });
    } else {
      rl.close();
      result();
    }
  });
};

const result = () => {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
        const firstString = words[j].split(" ");
        firstString[j][i] + 
    }
  }
};

askForWords();
