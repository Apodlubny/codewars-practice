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
