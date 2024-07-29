const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input1) => {
  rl.question("", (input2) => {
    // let sum1 = 0;
    // let sum2 = 0;

    // input1
    //   .split("")
    //   .sort()
    //   .forEach(() => sum1++);

    // input2
    //   .split("")
    //   .sort()
    //   .forEach(() => sum2++);

    console.log(input1 < input2 ? input1 : input2);
    rl.close();
  });
});
