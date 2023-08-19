//====================================================================================================================//
/* 121. Training JS #6: Basic data types--Boolean and conditional statements if..else */
const trueOrFalse = (val) => (val ? "true" : "false");
//====================================================================================================================//
/* 122. Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!" */

//loop solution
// function remove (string) {
//  let result = ''
//  for (let i=0; i < string.length; i+=1){
//    if (string[i] !== '!'){
//      result += string[i]
//    }
//  }
//   return `${result}!`
// }

//regexp solution
function remove(string) {
  return `${string.replace(/!/g, "")}!`;
}
//====================================================================================================================//
/* 123. 5 without numbers !!
Write a function that always returns 5
Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
 */
function unusualFive() {
  let array = ["a", "b", "c", "d", "e", "f"];
  return array.indexOf("f");
}
/* best solution
function unusualFive() {
  return 'fivee'.length
} */
//====================================================================================================================//
/* 124. Regex count lowercase letters
Your task is simply to count the total number of lowercase letters in a string.
Examples
"abc" ===> 3
"abcABC123" ===> 3
"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
"" ===> 0;
"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
"abcdefghijklmnopqrstuvwxyz" ===> 26 */

function lowercaseCount(str) {
  return str.split("").reduce((acc, i) => {
    if (i >= "a" && i <= "z") {
      return acc + 1;
    }
    return acc;
  }, 0);
}
/* regexp solution 
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
} */
//====================================================================================================================//