const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let sum = 0;
  input.toString().split("");

  for (let x of input) {
    sum += +x;
  }

  console.log(sum);

  rl.close();
});
