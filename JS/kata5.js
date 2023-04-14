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
