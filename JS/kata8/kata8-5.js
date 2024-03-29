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
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of
old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers
 at random places in the text.
Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
 */
const stringClean = (s) => s.replace(/[0-9]/g, "");
//====================================================================================================================//
/* 128. A Strange Trip to the Market 
You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you
 wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves 
 by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask,
  "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."
It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!
There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic
 era; B) it will ask you for tree fiddy.
Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.*/
function isLockNessMonster(s) {
  return (
    s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty")
  );
}
//====================================================================================================================//
/* 129. Holiday VIII - Duty Free
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.
You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).
For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.
Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.
All inputs will be integers. Please return an integer. Round down. */
function dutyFree(normPrice, discount, hol) {
  return parseInt(hol / ((normPrice * discount) / 100));
}
//====================================================================================================================//
/* 130. Name on billboard
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character). */
function billboard(name, price = 30) {
  return name.split("").reduce((acc, char) => acc + price, 0);
}
//====================================================================================================================//
