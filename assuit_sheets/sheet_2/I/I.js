// Function to check if a number is a palindrome
function isPalindrome(number) {
    const numStr = number.toString();
    const reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
}

// Function to remove leading zeroes
function removeLeadingZeroes(number) {
    const numStr = number.toString();
    const trimmedStr = numStr.replace(/^0+/, '');
    return parseInt(trimmedStr, 10);
}

// Example usage
const N = 1203400;

// Reversed number without leading zeroes
const reversedNumber = removeLeadingZeroes(parseInt(N.toString().split('').reverse().join('')));

// Check if it's a palindrome
if (isPalindrome(N)) {
    console.log("YES");
} else {
    console.log("NO");
}

// Print the reversed number without leading zeroes
console.log(reversedNumber);
