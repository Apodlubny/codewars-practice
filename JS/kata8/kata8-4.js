/* 91. get character from ASCII Value */

function getChar(c) {
  return String.fromCharCode(c);
}
//=========================================================================================================================
/* 92. Reversing Words in a String
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not
 clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi" */

function reverse(string) {
  return string.trim().split(/\s+/g).reverse().join(" ");
}
//=========================================================================================================================
/* 93. Switch it Up!
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

 */
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Invalid number";
  }
}
/* best practice
switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n] */
//=========================================================================================================================
