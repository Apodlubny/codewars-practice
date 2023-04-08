/* 31. Cat years, Dog years
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
 */

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears >= 1) {
    catYears += 15;
    dogYears += 15;
  }
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears > 2) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
};
//best practice
/*
 function calculateAgeInYears(humanYears) {
  if (humanYears < 1) {
    return [0, 0, 0];
  }

  let catYears = 15 + (humanYears > 1 ? 9 + (humanYears - 2) * 4 : 0);
  let dogYears = 15 + (humanYears > 1 ? 9 + (humanYears - 2) * 5 : 0);

  return [humanYears, catYears, dogYears];
} */
console.log(humanYearsCatYearsDogYears(1)); // [1,15,15]
console.log(humanYearsCatYearsDogYears(2)); // [2,24,24]
console.log(humanYearsCatYearsDogYears(10)); // [10,56,64]
// ==================================================================================
/* 32. I love you, a little , a lot, passionately ... not at all
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0. */

function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  const index = nbPetals % phrases.length;
  return phrases[index === 0 ? phrases.length - 1 : index - 1];
}
console.log(howMuchILoveYou(7)); //"I love you"
console.log(howMuchILoveYou(3)); //"a lot"
// ==================================================================================
/* 
33. How good are you really?
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
 */
function betterThanAverage(classPoints, yourPoints) {
  const totalPoints =
    classPoints.reduce((sum, points) => sum + points, 0) + yourPoints;
  const averagePoints = totalPoints / (classPoints.length + 1);
  return yourPoints > averagePoints;
}

/* 
best practice
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
} */

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //true
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); //false
/* 34. Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

/* 35. Even or Odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(2)); //"Even"
console.log(evenOrOdd(3)); //"Odd"

/* 
36. Beginner Series #1 School Paperwork
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
 */

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

/* 37. Function 1 - hello world
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of?
 What is a "hello world" solution you would want to show your friends?
 */

const greet = () => "hello world!";

/* 
37. Powers of 2
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
 */

function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
console.log(powersOfTwo(1)); //[1, 2]
console.log(powersOfTwo(4)); //[1, 2, 4, 8, 16]

/* 
38. Switch it Up
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One". */

function switchItUp(number) {
  const numberWords = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };

  return numberWords[number] || "";
}

/* 39. Square(n) Sum
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9  */

function squareSum(numbers) {
  return numbers.reduce((sum, number) => sum + number ** 2, 0);
}

/* 40. Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}
//best practice
/* const grow=x=> x.reduce((a,b) => a*b); */

/* 41. Volume of a Cuboid
Bob needs a fast way to calculate the volume of a cuboid with three values:
 the length, width and height of the cuboid. Write a function to help Bob with this calculation. */

class Kata {
  static getVolumeOfCuboid(l, w, h) {
    return l * w * h;
  }
}

/* 42. Student's Final Grade
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
 */
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  else if (exam > 75 && projects >= 5) return 90;
  else if (exam > 50 && projects >= 2) return 75;
  else return 0;
}

/* 43. Function 2 - squaring an argument */
const square = (n) => n ** 2;

/* 44. Parse nice int from char problem

You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
 */
function getAge(inputString) {
  return parseInt(inputString);
}
