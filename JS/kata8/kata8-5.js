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
