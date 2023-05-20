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
/* 33. Two fighters, one winner.

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  let currentAttacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let defender = currentAttacker === fighter1 ? fighter2 : fighter1;

  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= currentAttacker.damagePerAttack;
    if (defender.health <= 0) {
      return currentAttacker.name;
    }
    currentAttacker = currentAttacker === fighter1 ? fighter2 : fighter1;
    defender = defender === fighter1 ? fighter2 : fighter1;
  }
  return fighter1.health > fighter2.health ? fighter1.name : fighter2.name;
}

//======================================================================//
/* 34. Form The Minimum
Task
Given a list of digits, return the smallest number that could be formed from 
these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

 */

function minValue(values) {
  return Number([...new Set(values)].sort((a, b) => a - b).join(""));
}

//======================================================================//
/* 35. Fix string case
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase. */
function solve(s) {
  let upperCount = 0;
  let lowerCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upperCount++;
    } else {
      lowerCount++;
    }
  }

  if (upperCount > lowerCount) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

/* best practice solution
function solve(s){
  let upper = s.split('').filter(x => x === x.toUpperCase()).length
  let lower = s.length - upper
  return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
} */

//======================================================================//
/* 36. Beginner Series #3 Sum of Numbers
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number. */

function getSum(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}
//======================================================================//
/* 37. The Coupon Code
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}
//======================================================================//
/* 38. Money, Money, Money
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has
 to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest
Example:
  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00

After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that 
if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years. */
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    let interestR = principal * interest;
    let taxR = interestR * tax;
    principal += interestR - taxR;
    years++;
  }
  return years;
}
//======================================================================//
/* 39. Maximum Length Difference
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string */

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  const lengths1 = a1.map((x) => x.length);
  const lengths2 = a2.map((y) => y.length);

  const max1 = Math.max(...lengths1);
  const min1 = Math.min(...lengths1);

  const max2 = Math.max(...lengths2);
  const min2 = Math.min(...lengths2);

  return Math.max(max1 - min2, max2 - min1);
}

//======================================================================//
