/* 31. Factorial
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive
 integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception
 of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
  */

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("Input must be between 0 and 12");
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
//======================================================================//
/* 32. The highest profit wins!
Story
Ben has a very simple idea to make some profit: he buys something and sells it again.
 Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price.
  Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
 */
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
//======================================================================//
/* 33. Two fighters, one winner.

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  let currentAttacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let defender = currentAttacker === fighter1 ? fighter2 : fighter1;

  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= currentAttacker.damagePerAttack;
    if (defender.health <= 0) {
      return currentAttacker.name;
    }
    currentAttacker = currentAttacker === fighter1 ? fighter2 : fighter1;
    defender = defender === fighter1 ? fighter2 : fighter1;
  }
  return fighter1.health > fighter2.health ? fighter1.name : fighter2.name;
}

//======================================================================//
