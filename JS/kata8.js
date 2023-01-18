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
// ===================================================

// 8. String repeat

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// MS
function repeatStr(n, s) {
  return n > 0 ? s.repeat(n) : "";
}
console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(7, "Ab"));

// ===================================================

// 9. Invert values
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// MS
function invert(array) {
  return array.map((n) => n * -1);
}

console.log(invert([1, 2, 3, 4, 5])); //[-1,-2,-3,-4,-5]
console.log(invert([])); //[]
console.log(invert([0])); //[-0]

// ===================================================

// 10. Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// MS
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1705)); //18

console.log(century(1900)); //19
console.log(century(2000)); //20
console.log(century(85)); //1

// ===================================================
// 11. Convert number to reversed array of digits
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
//  MS
function digitize(n) {
  let res = String(n)
    .split("")
    .reverse()
    .map((num) => Number(num));
  return res;
}

// BP
// function digitize(n) {
//   return String(n).split("").map(Number).reverse();
// }

console.log(digitize(35231)); //[1,3,2,5,3]
console.log(digitize(548702838394)); // [4,9,3,8,3,8,2,0,7,8,4,5]
// ===================================================
// 12. Grasshopper - Summation
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// MS
var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    sum += i;
  }
  return sum;
};
// BP
// var summation = (num) => (num * (num + 1)) / 2;
console.log(summation(1)); //1
console.log(summation(8)); //36
console.log(summation(213)); //22791

// ===================================================

// 13. Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.
// MS
function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); //'8j8mBliB8gimjB8B8jlB'
console.log(noSpace("'8aaaaa dddd r     '")); //''8aaaaaddddr''

// ===================================================
// 14. The Feast of Many Beasts
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
function feast(beast, dish) {
  return beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
    ? true
    : false;
}

// BP
// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   );
// }
console.log(feast("great blue heron", "garlic naan")); //true
console.log(feast("cat", "yogurt")); //false
console.log(feast("blue-footed booby", "blueberry")); //true

// ===================================================
/* 
22. Simple multiplication
DESCRIPTION:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


*/
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(2)); //16
console.log(simpleMultiplication(1)); //9
console.log(simpleMultiplication(8)); //64
console.log(simpleMultiplication(5)); //45

/* 
23. Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

 */

function areYouPlayingBanjo(name) {
  return name[0] === "R" || name[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

/* BP
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
 */

console.log(areYouPlayingBanjo("Adam")); //"Adam does not play banjo"
console.log(areYouPlayingBanjo("bravo")); //"bravo does not play banjo"
console.log(areYouPlayingBanjo("rolf")); //"rolf plays banjo"

/*
24.  Opposites Attract

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
 */

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(1, 4)); // true
console.log(lovefunc(2, 2)); // false
console.log(lovefunc(0, 1)); // true
console.log(lovefunc(0, 0)); // false
// ===================================================
/* 
27. altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
 */

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};
console.log(toAlternatingCase("hello world")); //"HELLO WORLD"
console.log(toAlternatingCase("1a2b3c4d5e")); //"1A2B3C4D5E"
console.log(toAlternatingCase("HeLLo WoRLD")); //"hEllO wOrld"
// ===================================================
