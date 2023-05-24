/* 1. String incrementer
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

 */

function incrementString(str) {
  let i = str.length - 1;
  while (i >= 0 && /\d/.test(str[i])) {
    i--;
  }
  let baseStr = str.slice(0, i + 1);
  let numStr = str.slice(i + 1);
  if (numStr === "") {
    // if the string doesn't end with a number, append 1
    return baseStr + "1";
  } else {
    // parse the number and increment it
    let num = parseInt(numStr);
    num++;

    // pad the number with zeros to match the original length
    let paddedNum = num.toString().padStart(numStr.length, "0");
    return baseStr + paddedNum;
  }
}

/* best practice 
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1) */

console.log(incrementString("foobar000")); //"foobar001"
console.log(incrementString("foobar00999")); //"foobar001000"
//=======================================================================================

/* 2. Calculating with Functions
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
 */

function one(operation) {
  if (!operation) return 1;
  return operation(1);
}

function two(operation) {
  if (!operation) return 2;
  return operation(2);
}

function three(operation) {
  if (!operation) return 3;
  return operation(3);
}

function four(operation) {
  if (!operation) return 4;
  return operation(4);
}

function five(operation) {
  if (!operation) return 5;
  return operation(5);
}

function six(operation) {
  if (!operation) return 6;
  return operation(6);
}

function seven(operation) {
  if (!operation) return 7;
  return operation(7);
}

function eight(operation) {
  if (!operation) return 8;
  return operation(8);
}

function nine(operation) {
  if (!operation) return 9;
  return operation(9);
}

function plus(num) {
  return function (operand) {
    return operand + num;
  };
}

function minus(num) {
  return function (operand) {
    return operand - num;
  };
}

function times(num) {
  return function (operand) {
    return operand * num;
  };
}

function dividedBy(num) {
  return function (operand) {
    return Math.floor(operand / num);
  };
}
/* best practice
function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(n) {return function(v) {return v + n}}
function minus(n) {return function(v) {return v - n}}
function times(n) {return function(v) {return v * n}}
function dividedBy(n) {return function(v) {return v / n}} */

//=======================================================================================

/* 3. Rot13
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english
 alphabet should be shifted, like in the original Rot13 "implementation". */
function rot13(message) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Upper case letters
      charCode = ((charCode - 65 + 13) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // Lower case letters
      charCode = ((charCode - 97 + 13) % 26) + 97;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}
//=======================================================================================
