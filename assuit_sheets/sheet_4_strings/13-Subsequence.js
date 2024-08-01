// incorrected version
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("", (input) => {
//   if (
//     input === "helo" ||
//     (input.includes("helo") && !input.includes("hello"))
//   ) {
//     console.log("NO");
//     rl.close();
//     return;
//   }
//   const inputString = new Set(input);
//   const res = Array.from(inputString).join("").includes("helo");
//   //   const res = input.includes("hello");
//   console.log(res ? "YES" : "NO");
//   //   console.log(inputString);
//   rl.close();
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  const target = "hello";
  let targetIndex = 0;

  for (let char of input) {
    if (char === target[targetIndex]) {
      targetIndex++;
      if (targetIndex === target.length) {
        console.log("YES");
        rl.close();
        return;
      }
    }
  }

  console.log("NO");
  rl.close();
});
