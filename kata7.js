// ===================================================
// 15. You're a square!
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
// 16. Highest and Lowest
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
// 17. Sum of the first nth term of Series
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
// 18. Regex validate PIN code
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
