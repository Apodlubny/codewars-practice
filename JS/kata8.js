// The first one...couldn't be even more easy

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(1, 1)); //1
console.log(multiply(2, 1)); //2
console.log(multiply(2, 2)); //4
console.log(multiply(3, 5)); //15
// ===========================================================

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// Sum Numbers
function sum(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
// with reduce
// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

console.log(sum([-1])); // -1
console.log(sum([1, 5.2, 4, 0])); //10.2
console.log(sum([1, 5.2, 4, 0, -1])); //9.2
