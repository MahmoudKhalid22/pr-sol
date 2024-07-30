const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numberOfWords = 0;
const words = [];

const askForNumberOfWords = () => {
  rl.question("", (input) => {
    numberOfWords = parseInt(input);

    if (isNaN(numberOfWords) || numberOfWords <= 0) {
      console.log("Please enter a valid number greater than 0.");
      askForNumberOfWords();
    } else {
      askForWords();
    }
  });
};

const askForWords = () => {
  if (words.length < numberOfWords) {
    rl.question("", (word) => {
      words.push(word);
      askForWords();
    });
  } else {
    displayWords();
    rl.close();
  }
};

const displayWords = () => {
  for (let x of words) {
    if (x.length > 10) {
      console.log(x[0] + x.slice(1, x.length - 1).length + x.slice(-1));
    } else {
      console.log(x);
    }
  }
};

askForNumberOfWords();
