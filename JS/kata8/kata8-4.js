/* 91. get character from ASCII Value */

function getChar(c) {
  return String.fromCharCode(c);
}
//=========================================================================================================================
/* 92. Reversing Words in a String
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not
 clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi" */

function reverse(string) {
  return string.trim().split(/\s+/g).reverse().join(" ");
}
//=========================================================================================================================
/* 93. Switch it Up!
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

 */
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Invalid number";
  }
}
/* best practice
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n] */
//=========================================================================================================================
/* 94. Enumerable Magic #25 - Take the First N Elements
 Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.*/
function take(arr, n) {
  return arr.slice(0, n);
}
//=========================================================================================================================
/* 95. Drink about
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky" */

function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old < 18
    ? "drink coke"
    : old < 21
    ? "drink beer"
    : "drink whisky";
}
//=========================================================================================================================
/* 96. Transportation on vacation
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d). */

function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  }
  if (d >= 3) {
    return d * 40 - 20;
  }
  return d * 40;
}
//=========================================================================================================================
/* 97. A wolf in sheep's clothing
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep" */

function warnTheSheep(queue) {
  const wIndex = queue.reverse().indexOf("wolf");
  return wIndex === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${wIndex}! You are about to be eaten by a wolf!`;
}
//=========================================================================================================================
/* 98. Fix your code before the garden dies!
You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of 
water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die! */
function rainAmount(mm) {
  return mm >= 40
    ? "Your plant has had more than enough water for today!"
    : `You need to give your plant ${40 - mm}mm of water`;
}
//=========================================================================================================================
/* 99. Grasshopper - Function syntax debugging
Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them. */
function main(verb, noun) {
  return `${verb}${noun}`;
}
//=========================================================================================================================
/* 100. Find the first non-consecutive number
Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null2.
The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

 */
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) return arr[i];
  }
  return null;
}
//=========================================================================================================================
/* 101. Total amount of points 
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/
function points(games) {
  return games.reduce((totalPoints, game) => {
    const [ourScore, opponentScore] = game.split(":").map(Number);
    return ourScore > opponentScore
      ? totalPoints + 3
      : ourScore === opponentScore
      ? totalPoints + 1
      : totalPoints;
  }, 0);
}
//=========================================================================================================================
/* 102. Vowel remover
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata */
const shortcut = (string) => string.replace(/[aoiue]/g, "");
//=========================================================================================================================
/* 103. Enumerable Magic - Does My List Include This?
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
 */
const include = (arr, item) => arr.includes(item);
//=========================================================================================================================
/* 104. Add Length
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space. */
function addLength(str) {
  return str.split(" ").map((word) => `${word} ${word.length}`);
}
//=========================================================================================================================
/* 105. Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!" */
function replace(s) {
  return s.replace(/[aoiueAOIEU]/g, "!");
}
//=========================================================================================================================
/* 106. Beginner - Lost Without a Map 
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

function maps(x){
  return x.map(n => n * 2);
}
//=========================================================================================================================