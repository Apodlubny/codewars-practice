/* 61. Correct the mistakes of the character recognition software
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
 */

function correct(string) {
  const corrections = { 5: "S", 0: "O", 1: "I" };
  return string.replace(/[501]/g, (match) => corrections[match]);
}
//=====================================================================
/* 62. Welcome!
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
 */

// Language database as a Map
const languageDatabase = new Map([
  ["english", "Welcome"],
  ["czech", "Vitejte"],
  ["danish", "Velkomst"],
  ["dutch", "Welkom"],
  ["estonian", "Tere tulemast"],
  ["finnish", "Tervetuloa"],
  ["flemish", "Welgekomen"],
  ["french", "Bienvenue"],
  ["german", "Willkommen"],
  ["irish", "Failte"],
  ["italian", "Benvenuto"],
  ["latvian", "Gaidits"],
  ["lithuanian", "Laukiamas"],
  ["polish", "Witamy"],
  ["spanish", "Bienvenido"],
  ["swedish", "Valkommen"],
  ["welsh", "Croeso"],
]);

function greet(language) {
  // Convert the input language parameter to lowercase
  language = language.toLowerCase();
  // Check if the language exists in the language database
  return languageDatabase.has(language)
    ? languageDatabase.get(language)
    : languageDatabase.get("english");
}
//=====================================================================
/* 63. Convert a Number to a String!
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
 */

function numberToString(num) {
  return num.toString();
}
// function numberToString(num) {
//   return ""+num
// }
// function numberToString(num) {
// //   return `${num}`
// // }
// function numberToString(num) {
// //   return `${num}`
// // }
// function numberToString(num) {
// //   return String.num
// // }
