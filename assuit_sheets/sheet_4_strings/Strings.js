const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input1) => {
  rl.question("", (input2) => {
    console.log(input1.length + " " + input2.length);
    console.log(input1 + input2);
    console.log(
      input2[0] + input1.slice(1) + " " + input1[0] + input2.slice(1)
    );
    rl.close();
  });
});
