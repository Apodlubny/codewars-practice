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
/* 125. Sentence Smash
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 */
smash = function (words) {
  return words.join(" ");
};
//====================================================================================================================//
/* 126. L1: Bartender, drinks!
Complete the function that receives as input a string, and produces outputs according to the following table:
Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars". */
function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}
//using object
const drinks = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

const getDrinkByProfession = (profession) =>
  drinks[profession.toLowerCase()] || "Beer";
//====================================================================================================================//
/* 127. String cleaning
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
 */
const stringClean = (s) => s.replace(/[0-9]/g, "");
//====================================================================================================================//
