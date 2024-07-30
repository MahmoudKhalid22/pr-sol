const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (height) => {
  height = parseInt(height);

  for (let i = 0; i < height; i++) {
    const spaces = " ".repeat(height - i - 1);
    // Print the line with spaces followed by hashes
    console.log(spaces + "#".repeat(i + 1));
  }

  rl.close();
});
