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

/* 44. Remove exclamation marks
Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

/* 45. Return Negative
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12 */

function makeNegative(num) {
  return num >= 0 ? -num : num;
}

/* 46. Grasshopper - Terminal game move function
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15 */

function move(position, roll) {
  return position + roll * 2;
}

/* 47. Third Angle of a Triangle
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

 */

function otherAngle(a, b) {
  return 180 - (a + b);
}

/* 48. Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

/* 49. Quarter of the year
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12 */

const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

/* best practice
 */
//const quarterOf = (m) => Math.ceil(m / 3);

/* 50. Rock Paper Scissors!

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

/* 51. Sort and Star
You will be given a list of strings. You must sort it alphabetically (case-sensitive,
 and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
); //'b***i***t***c***o***i***n'
console.log(
  twoSort([
    "i",
    "want",
    "to",
    "travel",
    "the",
    "world",
    "writing",
    "code",
    "one",
    "day",
  ])
); //'c***o***d***e'

/* 52. Difference of Volumes of Cuboids

In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.*/

function findDifference(a, b) {
  const calcVolume = (cuboid) => cuboid.reduce((acc, curr) => acc * curr, 1);
  const volumeA = calcVolume(a);
  const volumeB = calcVolume(b);
  return Math.abs(volumeA - volumeB);
}
//=================================================================


/* 53. Double Char
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  " */

function doubleChar(str) {
  return str
    .split("")
    .map((s) => s + s)
    .join("");
}
//=================================================================

/* 54. Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last
 characters of a string. You're given one parameter, the original string. You don't have to
  worry with strings with less than two characters. */
function removeChar(str) {
  return str.slice(1, -1);
}

//=================================================================
/* 55. Twice as old
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future. */

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const ageDifference=dadYearsOld - sonYearsOld
  const yearsAgo = Math.abs(ageDifference - sonYearsOld)
 return yearsAgo
  }

/* best practice
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
*/
//=================================================================
/* 56. Grasshopper - Messi Goals
Use variables to find the sum of the goals Messi scored in 3 competitions

Information

Messi goal scoring statistics:

Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
 */

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals
//=================================================================

/* 57. Training JS #7: if..else and ternary operator
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1
 parameter:n, n is the number of hotdogs a customer will buy, different numbers
  have different prices (refer to the following table), return how much money will
   the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.

 */

function saleHotdogs(n){
  if(n<5){
  	return 100*n;
  }else if((n >= 5)&&(n < 10)){
  	return 95*n;
  }else{
  	return 90*n;
  }
}

/* best practice
function saleHotdogs(n){
  return n*(n<5?100:n<10?95:90);
}
*/
//=================================================================

/* 58. Keep Hydrated!
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
 */

function litres(time) {
  return Math.floor(time * 0.5);
}
//=================================================================