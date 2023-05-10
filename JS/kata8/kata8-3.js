/* 61. Correct the mistakes of the character recognition software
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
 */

function correct(string) {
  const corrections = { 5: "S", 0: "O", 1: "I" };
  return string.replace(/[501]/g, (match) => corrections[match]);
}
//=====================================================================
/* 62. Welcome!
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
 */

// Language database as a Map
const languageDatabase = new Map([
  ["english", "Welcome"],
  ["czech", "Vitejte"],
  ["danish", "Velkomst"],
  ["dutch", "Welkom"],
  ["estonian", "Tere tulemast"],
  ["finnish", "Tervetuloa"],
  ["flemish", "Welgekomen"],
  ["french", "Bienvenue"],
  ["german", "Willkommen"],
  ["irish", "Failte"],
  ["italian", "Benvenuto"],
  ["latvian", "Gaidits"],
  ["lithuanian", "Laukiamas"],
  ["polish", "Witamy"],
  ["spanish", "Bienvenido"],
  ["swedish", "Valkommen"],
  ["welsh", "Croeso"],
]);

function greet(language) {
  // Convert the input language parameter to lowercase
  language = language.toLowerCase();
  // Check if the language exists in the language database
  return languageDatabase.has(language)
    ? languageDatabase.get(language)
    : languageDatabase.get("english");
}
//=====================================================================
/* 63. Convert a Number to a String!
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
 */

function numberToString(num) {
  return num.toString();
}
// function numberToString(num) {
//   return ""+num
// }
// function numberToString(num) {
// //   return `${num}`
// // }
// function numberToString(num) {
// //   return `${num}`
// // }
// function numberToString(num) {
// //   return String.num
// // }

//=========================================================================
/* 64. Is it even?
n this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata. */

function testEven(n) {
  return n % 2 === 0 ? true : false;
}
//=========================================================================
/* 
65. Beginner Series #4 Cockroach
The cockroach is one of the fastest insects. Write a function which takes its
 speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */

function cockroachSpeed(s) {
  return Math.floor(s * 27.7778);
}

//best practice const cockroachSpeed = s => Math.floor(s / 0.036);
//=========================================================================
/* 66. Sum of positive
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */
function positiveSum(arr) {
  return arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
}
//=========================================================================
/* 67. You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function check(a, x) {
  return a.includes(x);
}
//=========================================================================
/* 68. Exclusive "or" (xor) Logical Operator

Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or"
 (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions
  are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.*/

function xor(a, b) {
  return a === b ? false : true;
}

//best practice function xor(a, b) {
// return a != b;
// }
//=========================================================================

/* 69. The Wide-Mouthed frog!
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator
 who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal
 which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
 */
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
//=========================================================================
/* 70. Exclamation marks series #1: Remove an exclamation mark from the end of string

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"*/

function remove(string) {
  return string.endsWith("!") ? string.slice(0, -1) : string;
}

//=========================================================================
/* 71. All Star Code Challenge #18

Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
 */

function strCount(str, letter) {
  return str.split(letter).length - 1;
}
//=========================================================================
/* 72. Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
//=========================================================================
/* 73. Find the smallest integer in the array
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty. */

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
//=========================================================================
/* 74. Count of positives / sum of negatives
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element
 is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  if (!input || input.length === 0) {
    return [];
  }
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] > 0) {
      positive += 1;
    }
    if (input[i] < 0) {
      negative += input[i];
    }
  }
  return [positive, negative];
}

/* best practice
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce((arr, n) => {
    if (n > 0) arr[0]++;
    if (n < 0) arr[1] += n;
    return arr;
  }, [0, 0]);
} */

//=========================================================================
/* 75. Sum Mixed Array
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x) {
  return x.reduce((acc, cur) => acc + Number(cur), 0);
}

//=========================================================================
