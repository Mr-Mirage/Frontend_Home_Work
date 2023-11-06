// Найти первое положительное число в массиве.

// const positiveNum = arr => arr.find(elem => elem > 0);
// console.log(positiveNum([-4, -2, 3, -5]));

// Найти первое отрицательное число в массиве.

// const negativeNum = arr => arr.find(elem => elem < 0);
// console.log(negativeNum([4, -2, 3, -5]));

// Найти первый элемент, больший 100.

// const moreHundred = arr => arr.find(elem => elem > 100);
// console.log(moreHundred([100, -120, 101, 200]));

// Найти первый элемент, начинающийся с определенной буквы.

// const firstLetterStr = (arr, letter) => arr.find(elem => elem.charAt(0).toLowerCase() === letter.toLowerCase());
// console.log(firstLetterStr(['Anna', 'boris', 'Misha', 'Katerina'], 'K'));

// *Найти первый элемент, который является палиндромом (читается одинаково с начала и с конца). => 'anna', 'sos', ...

const findFirstPalindrome = arr => arr.find(elem => elem.toLowerCase() === elem.toLowerCase().split('').reverse().join(''));
console.log(findFirstPalindrome(['Hello, world', 'Anna is here', 'Eme']));
