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
/* 76. Reverse List Order
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9] */

function reverseList(list) {
  return list.reverse();
}
//=========================================================================

/* 77. Grasshopper - Basic Function Fixer
Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function? */
function addFive(num) {
  return num + 5;
}
//=========================================================================
/* 78. Multiplication table for number
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests. */

function multiTable(number) {
  let result = "";
  for (let i = 1; i <= 10; i += 1) {
    result += `${i} * ${number} = ${i * number}`;
    if (i < 10) {
      result += "\n";
    }
  }
  return result;
}
//=========================================================================
/* 79. If you can't sleep, just count sheep!!
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers. */

var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};
//=========================================================================
/* 80. Is it a palindrome?
Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number,
 phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the 
 date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama". */

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
};
//=========================================================================
/* 81. Calculate BMI
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

function bmi(weight, height) {
  const bmiIndex = weight / height ** 2;

  if (bmiIndex <= 18.5) {
    return "Underweight";
  }
  if (bmiIndex <= 25) {
    return "Normal";
  }
  if (bmiIndex <= 30) {
    return "Overweight";
  }
  if (bmiIndex > 30) {
    return "Obese";
  }
}
//=========================================================================
/* 82. N-th Power
This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element
 in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

 */
function index(array, n) {
  return n < 0 || n >= array.length ? -1 : Math.pow(array[n], n);
}
//=========================================================================
/* 83. Expressions Matter
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
 */

function expressionMatter(a, b, c) {
  const options = [
    a + b + c,
    a * b * c,
    (a + b) * c,
    a * (b + c),
    a + b * c,
    a * b + c,
  ];
  return Math.max(...options);
}

//=========================================================================
/* 84. Convert a Boolean to a String
mplement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given. */
function booleanToString(b) {
  return b.toString();
}
//=========================================================================
/* 85. Hex to Decimal
Complete the function which converts hex number (given as a string) to a decimal number. */
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}
//=========================================================================
/* 86. Bin to Decimal
Complete the function which converts a binary number (given as a string) to a decimal number. */
function binToDec(bin) {
  return parseInt(bin, 2);
}
//=========================================================================
/* 87. Will you make it?
You were camping with your friends far away from home, but when it's time to go back,
 you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not. */
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};
//=========================================================================
/* 88. Super Duper Easy
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error". */
function problem(x) {
  return typeof x === "string" ? "Error" : x * 50 + 6;
}
//=========================================================================
/* 89. Grasshopper - Terminal game combat function
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. 
Health can't be less than 0. */
function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}
//=========================================================================
/* 90. Is he gonna survive?
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful
 dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :) */

function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}
//=========================================================================
