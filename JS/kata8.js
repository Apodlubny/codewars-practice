// 1. The first one...couldn't be even more easy

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(1, 1)); //1
console.log(multiply(2, 1)); //2
console.log(multiply(2, 2)); //4
console.log(multiply(3, 5)); //15
// ===========================================================

// 2. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

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
// ===========================================================

// 3. Sum Numbers
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

// ===================================================
// 4. Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g, "U");
}

// function DNAtoRNA(dna) {
//   return dna.split("T").join("U");
// }

// ===================================================
// 5. Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.
function distinct(a) {
  return [...new Set(a)];
}

console.log([1]); //[1];
console.log([1, 2]); //[1, 2]
console.log([1, 1, 2]); //[1, 2];
console.log([1, 1, 1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5];
console.log([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7]); //[1, 2, 3, 4, 5, 6, 7]

// ===================================================
// 6. Reversed strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// my solution
function solution(str) {
  let array = str.split("");
  array.reverse();
  return array.join("");
}
// best practice
// function solution(str) {
//   return str.split("").reverse().join("");
// }

console.log(solution("world")); //'dlrow'
console.log(solution("hello")); //'olleh'

// ===================================================
// 7. Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
// MS
function opposite(number) {
  let opNumber = 0 - number;
  return opNumber;
}
// BP
// function opposite(number) {
//   return -number;
// }
console.log(opposite(1)); //-1
console.log(opposite(4.25)); //-4.25
console.log(opposite(-5)); //5
