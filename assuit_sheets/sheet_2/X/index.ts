function countOnes(n: number): number {
    let count = 0;
    while (n > 0) {
        count += n % 2;
        n = Math.floor(n / 2);
    }
    return count;
}

function convertToDecimal(t: number, testCases: number[]): number[] {
    const results: number[] = [];

    for (let i = 0; i < t; i++) {
        const N = testCases[i];

        // Convert N to its binary representation
        const binaryRepresentation = N.toString(2);

        // Count the number of ones in the binary representation
        const onesCount = countOnes(N);

        // Calculate the equivalent decimal number with the same number of ones
        const result = Math.pow(2, onesCount) - 1;
        results.push(result);
    }

    return results;
}

// Example usage
const T = 3;
const testCases = [10, 7, 8];

const results = convertToDecimal(T, testCases);

// Output the results
results.forEach(result => console.log(result));
