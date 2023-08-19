/* 
Цельсій у Фаренгейт
Формула для конвертації Цельсію у Фаренгейт: температура в Цельсіях × 9/5 + 32.
Вам надано змінну celsius, яка відповідає температурі за Цельсієм. Використайте вже визначену змінну fahrenheit та призначте
 їй температуру за Фаренгейтом, еквівалентну заданій температурі за Цельсієм. Використайте запропоновану вище формулу для 
 конвертації температури за Цельсієм у температуру за Фаренгейтом.
 */

function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// Change the inputs below to test your code
convertCtoF(30);

//******************************************************************************************************************************
/*
Зворотний рядок
Переверніть наданий рядок та поверніть рядок у зворотньому порядку.

Наприклад, "hello" повинен стати "olleh". 
 */

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
//******************************************************************************************************************************
/* Факторизація числа
Поверніть факторіал поданого цілого числа.

Якщо ціле число позначається літерою n, то факторіал — це добуток усіх додатних цілих чисел, менших або рівних n.

Факторіали часто зображаються короткими позначеннями n!

Наприклад: 5! = 1 * 2 * 3 * 4 * 5 = 120

Функції будуть задані тільки ті цілі числа, які більші або дорівнюють нулю. */
//loop solution
// function factorialize(num) {
//   let result = 1;
//   for (let i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// factorialize(5);

//recursive solution
function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);
//******************************************************************************************************************************
/* 
Пошук найдовшого слова в рядку
Поверніть довжину найдовшого слова у даному реченні.

Ваша відповідь повинна бути числом. */

//1 solution
// function findLongestWordLength(str) {
//   // split the string into individual words
//   const words = str.split(" ");

//   // words only has 1 element left that is the longest element
//   if (words.length == 1) {
//     return words[0].length;
//   }

//   // if words has multiple elements, remove the first element
//   // and recursively call the function
//   return Math.max(
//     words[0].length,
//     findLongestWordLength(words.slice(1).join(" "))
//   );
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

//map solution
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}
//******************************************************************************************************************************
