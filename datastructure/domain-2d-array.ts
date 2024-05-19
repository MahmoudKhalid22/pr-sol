// function hourglass(arr: number[][]) {
//   let sum1: number = 0;
//   let sum2;
//   let sum3;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < 3; j++) {
//       sum1 = sum1 + arr[i][j];
//     }
//     console.log(sum1);
//   }
// }

function hourglass(arr: number[][]): number {
  let maxSum: number = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      // Calculate the sum of the current hourglass
      const sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] + // top row
        arr[i + 1][j + 1] + // middle element
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2]; // bottom row

      //       // Update maxSum if the current hourglass sum is greater
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}

// // Example usage:
// const exampleArray = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

// console.log(hourglass(exampleArray)); // Output: 19

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

console.log(hourglass(arr));
