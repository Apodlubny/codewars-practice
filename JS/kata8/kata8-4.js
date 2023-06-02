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
