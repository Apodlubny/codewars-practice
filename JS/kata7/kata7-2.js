/* 31. Factorial
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive
 integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception
 of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
  */

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("Input must be between 0 and 12");
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
//======================================================================//
/* 32. The highest profit wins!
Story
Ben has a very simple idea to make some profit: he buys something and sells it again.
 Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price.
  Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
 */
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
//======================================================================//
