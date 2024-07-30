const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  const res = input.replaceAll(",", " ");
  const result = res.split("");
  let stringResult = "";

  for (let x of result) {
    if (x === x.toUpperCase()) {
      x = x.toLowerCase();
    } else {
      x = x.toUpperCase();
    }
    stringResult += x;
  }
  console.log(stringResult);
  rl.close();
});
