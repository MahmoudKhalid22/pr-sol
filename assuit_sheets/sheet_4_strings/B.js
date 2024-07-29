const readline = require("readline");

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (S) => {
  const result = S.slice(0, S.indexOf("\\"));
  console.log(result);
  rl.close();
});
