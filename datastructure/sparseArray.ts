function matchingStrings(stringList, queries) {
  // Write your code here

  let output: number[] = [];
  for (let j = 0; j < queries.length; j++) {
    let count = 0;
    for (let i = 0; i < stringList.length; i++) {
      if (queries[j] === stringList[i]) {
        count++;
      }
    }
    output.push(count);
  }
  return output;
}
