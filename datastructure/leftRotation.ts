// function leftRotation(d: number, arr: number[]) {
//   let copyArr: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     copyArr[i] = arr[arr.length - 1 - i];
//   }
//   console.log(copyArr);
// }

// leftRotation(1, [1, 2, 3, 4, 5]);

function leftRotation(d: number, arr: number[]): number[] {
  const n = arr.length;
  // Normalize the number of rotations in case d > n
  const rotations = d % n;

  // Perform the left rotation
  const rotatedArr = arr.slice(rotations).concat(arr.slice(0, rotations));

  return rotatedArr;
}

// Example usage:
console.log(leftRotation(1, [1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]
console.log(leftRotation(2, [1, 2, 3, 4, 5])); // Output: [3, 4, 5, 1, 2]
console.log(leftRotation(5, [1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(leftRotation(7, [1, 2, 3, 4, 5])); // Output: [3, 4, 5, 1, 2]
