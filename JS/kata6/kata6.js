/* 
1. Your order, please
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */

function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"
// ========================================================================================
/* 
2. Two Sum
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0] */

function twoSum(numbers, target) {
  for (let i = 0; i <= numbers.length; i += 1) {
    for (let j = i + 1; j <= numbers.length; j += 1) {
      let result = numbers[i] + numbers[j];
      if (result === target) return [i, j];
    }
  }
}
console.log(twoSum([1, 2, 3], 4)); // [0,2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1,2]
console.log(twoSum([2, 2, 3], 4)); // [0,1]
// ========================================================================================
/* 3. Detect Pangram
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */
function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.indexOf(x) !== -1);
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true

// ========================================================================================

/* 
4. Delete occurrences of an element if it occurs more than n times
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21]. */

function deleteNth(arr, n) {
  const tired = new Set();
  const seen = new Map();
  return arr.filter((x) => {
    if (tired.has(x)) return false;
    const newCount = (seen.get(x) || 0) + 1;
    if (newCount >= n) tired.add(x);
    else seen.set(x, newCount);
    return true;
  });
}
console.log(deleteNth([20, 37, 20, 21], 1)); // [20, 37, 21];
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([1, 1, 1, 1, 1], 5)); // [1,1,1,1,1];
console.log(deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3)); // [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]
// ========================================================================================

/* 
5. Array.diff
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

console.log(arrayDiff([1, 2], [1])); //[2], "a was [1,2], b was [1]"
console.log(arrayDiff([1, 2, 2], [1])); // [2,2], "a was [1,2,2], b was [1]");
assert.deepEqual(
  arrayDiff([1, 2, 2], [2]), // [1],"a was [1,2,2], b was [2]");
  console.log(arrayDiff([], [1, 2])) // [], "a was [], b was [1,2]")
);
// ========================================================================================
/*
6. Take a Ten Minutes Walk
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
 */

function isValidWalk(walk) {
  const north = walk.filter((item) => {
    return item === "n";
  }).length;
  const south = walk.filter((item) => {
    return item === "s";
  }).length;
  const east = walk.filter((item) => {
    return item === "e";
  }).length;
  const west = walk.filter((item) => {
    return item === "w";
  }).length;

  return walk.length === 10 && north === south && east === west;
}
console.log(isValidWalk(["n", "s"])); // false
console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
); // false
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
// ========================================================================================
/* 7. Playing with digits
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 */

function digPow(n, p) {
  const sum =
    n
      .toString()
      .split("")
      .map((num, idx) => Math.pow(parseInt(num), idx + p))
      .reduce((a, b) => a + b) / n;
  return sum % 1 === 0 ? sum : -1;
}

console.log(digPow(89, 1)); //1
console.log(digPow(92, 1)); //-1
console.log(digPow(46288, 3)); //51
// ========================================================================================
/* 
7. Bouncing Balls
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
 */

function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce < 1 && bounce > 0 && window < h) {
    let count = 1; //number of times mom will see the ball( init number by default is 1 )
    h = h * bounce;
    while (h > window) {
      count += 2; //while h is bigger then window mom will see the ball 2 times: way up and way down
      h = h * bounce; // need it to see if h is still higher then window
    }
    return count;
  } else {
    return -1;
  }
}
//best practice
/* 
function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
} */

console.log(bouncingBall([2.0, 0.5, 1])); //1
console.log(bouncingBall([3.0, 0.66, 1.5])); //3
console.log(bouncingBall([30, 0.75, 1.5])); //21
// ========================================================================================
/* 8. Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89
=
8
1
+
9
2
89=8 
1
 +9 
2
 

The next number in having this property is 
135
135:

See this property again: 
135
=
1
1
+
3
2
+
5
3
135=1 
1
 +3 
2
 +5 
3
 

Task
We need a function to collect these numbers, that may receive two integers 
�
a, 
�
b that defines the range 
[
�
,
�
]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[
�
,
�
]
[a,b] the function should output an empty list.

90, 100 --> []

 */
function sumDigPow(a, b) {
  let result = [];
  for (i = a; i <= b; i += 1) {
    let number = String(i).split("");
    if (
      i ===
      number.reduce(
        (acc, currentValue, currentIndex) =>
          acc + currentValue ** (currentIndex + 1),
        0
      )
    )
      result.push(i);
  }
  return result;
}

console.log(sumDigPow(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(10, 100)); //[89]
console.log(sumDigPow(50, 150)); //[89, 135]
// =============================================================================

/* 
9. Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

function solution(str) {
  let result = "";

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      result += " ";
    }
    result += str[i];
  }
  return result;
}

// best practice
/* 
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

} */

console.log(solution("camelCasing")); //'camel Casing'
console.log(solution("camelCasingTest")); //'camel Casing Test'
// =============================================================================
/* 
10. Replace With Alphabet Position
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map((char) => char.charCodeAt(0) - 96)
    .join(" ");
}
// =============================================================================
/* 
11. Duplicate Encoder
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
if that character appears only once in the original string, or ")" if that character appears more than once in 
the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX",
 the "XXX" is the expected result, not the input!
 */

function duplicateEncode(word) {
  const charCounts = new Map();
  const normalizedStr = word.toLowerCase();
  let result = "";
  for (let i = 0; i < normalizedStr.length; i++) {
    const char = normalizedStr[i];
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }
  for (let i = 0; i < normalizedStr.length; i++) {
    const char = normalizedStr[i];
    if (charCounts.get(char) === 1) {
      result += "(";
    } else {
      result += ")";
    }
  }

  return result;
}

//bes practice
/* 
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
} */

console.log(duplicateEncode("recede")); //"()()()",
console.log(duplicateEncode("Success")); //")())())",
// =============================================================================

/* 
12. Counting Duplicates 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic
 characters and numeric digits that occur more than once in the input string. 
 The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/

function duplicateCount(str) {
  const charCount = {};
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (charCount[char]) {
      charCount[char]++;
      if (charCount[char] === 2) {
        count++;
      }
    } else {
      charCount[char] = 1;
    }
  }

  return count;
}

console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("Indivisibility")); //1

// =============================================================================

/* 13. Count the smiley faces!
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array).
 Order of the face (eyes, nose, mouth) elements will always be the same.


 */

function countSmileys(arr) {
  return arr.filter((face) => face.match(/^[:;][-~]?[)D]$/)).length;
}
// =============================================================================

/* 14. Highest Scoring Word
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


 */

function high(str) {
  const words = str.split(" ");
  let highestScore = 0;
  let highestWord = "";

  words.forEach((word) => {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96;
    }
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  });

  return highestWord;
}
/* best practice
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
} */
// =============================================================================

/* 15. Unique In Order
Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each
 other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

var uniqueInOrder = function (iterable) {
  let uniqueSeq = [];
  let lastChar = null;
  for (let i = 0; i < iterable.length; i++) {
    let char = iterable[i];
    if (char !== lastChar) {
      uniqueSeq.push(char);
      lastChar = char;
    }
  }
  return uniqueSeq;
};
// =============================================================================

/* 16. Mexican Wave
The wave (known as the Mexican wave in the English-speaking world outside North America)
 is an example of metachronal rhythm achieved in a packed stadium when successive groups
 of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to 
 full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though
 individual spectators never move away from their seats. In many large arenas the crowd 
 is seated in a contiguous circuit all the way around the sport field, and so the wave 
 is able to travel continuously around the arena; in discontiguous seating arrangements,
  the wave can instead reflect back and forth through the crowd. When the gap in seating
   is narrow, the wave can sometimes pass through it. Usually only one wave crest will be
    present at any given time in an arena, although simultaneous, counter-rotating waves
     have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
 You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"] */

function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== " ") {
      const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(waveStr);
    }
  }
  return result;
}
// =============================================================================

/* 17. Equal Sides Of An Array

You are going to be given an array of integers. Your job is to take that array and find an index N
 where the sum of the integers to the left of N is equal to the sum of the integers to the right 
 of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left 
side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side
 of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find
 an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.*/

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
    const rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}
// =============================================================================

/* 18. Build Tower
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number
 of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] */

function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - i - 1);
    const stars = "*".repeat(i * 2 + 1);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}
// =============================================================================

/* 19. Who likes it?
You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
 pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
 */
function likes(names) {
  const count = names.length;
  switch (count) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
  }
}
// =====================================================================================================================

/* 20. Persistent Bugger.
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
 */
function persistence(num) {
  if (num < 10) {
    return 0;
  }

  let result = String(num)
    .split("")
    .reduce((acc, digit) => acc * Number(digit), 1);

  return 1 + persistence(result);
}
// =====================================================================================================================

/* 21. Count characters in your string
 The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/
function count(string) {
  const result = {};

  for (let char of string) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
// =====================================================================================================================
/* 22. Sort the odd
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortArray(array) {
  const odds = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  return array.map((num) => (num % 2 !== 0 ? odds.shift() : num));
}
// =====================================================================================================================
/* 23. Title Case
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) 
or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be
 given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)
First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string.
 The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox' */
function titleCase(title, minorWords) {
  if (!title) return "";

  const minorWordsArray = minorWords ? minorWords.toLowerCase().split(" ") : [];

  const result = title
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      return index === 0 || !minorWordsArray.includes(word)
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word;
    });

  return result.join(" ");
}
// =====================================================================================================================
/* 24. Multiplication table
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9 */
multiplicationTable = function(size) {
  const table = [];
  
  for (let i = 1; i <= size; i+=1) {
    const row = [];
    
    for (let j = 1; j <= size; j+=1) {
      row.push(i * j);
    }
    
    table.push(row);
  }
  
  return table;
}
// =====================================================================================================================
