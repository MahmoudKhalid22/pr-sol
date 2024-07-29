const readline = require("readline");

// Create an interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Read the first line for string S
rl.question("Enter string S: ", (S) => {
  // Read the second line for string T
  rl.question("Enter string T: ", (T) => {
    // Print the lengths of S and T separated by a space
    console.log(`${S.length} ${T.length}`);

    // Print S and T separated by a space
    console.log(`${S} ${T}`);

    // Close the readline interface
    rl.close();
  });
});
