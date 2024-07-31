const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (word) => {
  const result =
    word.split("").join("") === word.split("").reverse().join("")
      ? "YES"
      : "NO";
  console.log(result);
  rl.close();
});
