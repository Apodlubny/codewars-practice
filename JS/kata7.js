// ===================================================
// 1. You're a square!
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
// isSquare (-1) // => false
// isSquare   3  // => false
// isSquare   4  // => true
// isSquare  25  // => true
// isSquare  26  // => false

// MS
var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n)) ? true : false;
};

// BP
// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }

// ===================================================
// 2. Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
// MS
function highAndLow(numbers) {
  const arr = numbers.split(" ").map(Number);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow("10 2 -1 -20")); //"10 -20"
console.log(highAndLow("-1 -1")); //"-1 -1"
console.log(highAndLow("-1 -1 0")); //"0 -1"
console.log(highAndLow("42")); //"42"
// ===================================================
// 3. Sum of the first nth term of Series
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  let result = 0;
  let reverage = 1;
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      result = 1;
    } else {
      reverage += 3;
      result = result + 1 / reverage;
    }
  }
  return result.toFixed(2);
}

// BP
// function SeriesSum(n) {
//   for (a = 0, i = 1; i <= n * 3; i += 3) a += 1 / i;
//   return a.toFixed(2);
// }

console.log(SeriesSum(1)); //'1.00'
console.log(SeriesSum(2)); //'1.25'
console.log(SeriesSum(5)); //'1.57'
console.log(SeriesSum(58)); //'2.4'
// ===================================================
// 4. Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// MS
function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) return false;
  for (let i = 0; i < pin.length; i += 1) {
    if (pin[i] < "0" || pin[i] > "9") return false;
  }
  return true;
}
// BP
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }
console.log(validatePIN("1")); //false
console.log(validatePIN("123")); //false
console.log(validatePIN("a234")); //false
console.log(validatePIN("1111")); //true
console.log(validatePIN("111123")); //true

// ===================================================

// 5. Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// MS
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
console.log(toJadenCase("Dying is mainstream")); //"Dying Is Mainstream"
console.log(toJadenCase("When I die. then you will realize")); //"When I Die. Then You Will Realize"
console.log(
  toJadenCase(
    "I should just stop tweeting, the human conciousness must raise before I speak my juvenile philosophy."
  )
); //"I Should Just Stop Tweeting, The Human Conciousness Must Raise Before I Speak My Juvenile Philosophy."
// ===================================================

// 6. Count the divisors of a number
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
// MS
function getDivisorsCnt(n) {
  let result = 0;
  for (let i = n; i > 0; i -= 1) {
    if (n % i === 0) {
      result += 1;
    }
  }
  return result;
}

console.log(getDivisorsCnt(1)); //1
console.log(getDivisorsCnt(10)); //4
console.log(getDivisorsCnt(25)); //3

// ===================================================
// 7. Testing 1-2-3

// DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// MS
const number = (array) => array.map((n, i) => `${i + 1}: ${n}`);

console.log(number(["a", "b", "c"])); //["1: a", "2: b", "3: c"]);

// ===================================================
/* 8. Categorize New Member
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
 */
function openOrSenior(data) {
  var result = [];
  data.forEach(function (member) {
    if (member[0] >= 55 && member[1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  });
  return result;
}
//BP
// function openOrSenior(data) {
//   return data.map(([age, handicap]) =>
//     age >= 55 && handicap > 7 ? "Senior" : "Open"
//   );
// }

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); //['Open', 'Senior', 'Open', 'Senior']

console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
); //['Open', 'Open', 'Open', 'Open']
// ===================================================
/* 
9. Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
 */
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

console.log(rowSumOddNumbers(1)); //1
console.log(rowSumOddNumbers(42)); //74088
// ===================================================
/* 
10. Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

function descendingOrder(n) {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
console.log(descendingOrder(0)); //0
console.log(descendingOrder(111)); //111
console.log(descendingOrder(15)); //51
console.log(descendingOrder(1021)); //2110
console.log(descendingOrder(123456789)); //987654321
// ===================================================
/* 
11. Disemvowel Trolls
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let regex = /[aiueoAIUEO]/g;
  return str.replace(regex, "");
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"

// ===================================================
/* 12. Binary Addition
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
 */
function addBinary(a, b) {
  return (a + b).toString(2);
}
console.log(addBinary(51, 12)); // "111111"
console.log(addBinary(100, 0)); // "1100100"
