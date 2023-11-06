// 1. Создайте пустой массив numbers. Добавьте в него числа от 1 до 5 с использованием цикла и метода push.

// const numbers = [];
//     for(let i = 0; i < 5; i++){
//         numbers.push(i + 1)
//     }
//     console.log(numbers);

// 2. Создайте массив evenNumbers и с использованием цикла метода push добавьте в него все четные числа от 2 до 10.

// const evenNumbers = [];
// for(let i = 1;  i <= 5; i++){
//     evenNumbers.push(i * 2);
// }
// console.log(evenNumbers);

// 3. Создайте пустой массив squares. Заполните его квадратами чисел от 1 до 5 с использованием метода push.

// const squares = [];
// for(let i = 1; i <= 5; i++){
//     squares.push(i ** 2)
// }
// console.log(squares);

// 4. Создайте массив randomNumbers и добавьте в него 10 случайных чисел от 1 до 100 с использованием цикла и метода push.

// const randomNumbers = [];
// for(let i = 0; i < 10; i ++){
//     randomNumbers.push(Math.round(Math.random() * 99 + 1))
// }
// console.log(randomNumbers);

// 5. Создайте массив positiveNumbers и добавьте в него только положительные числа из массива numbers = [1, -2, 3, -4, 5, -6] с использованием цикла и метода push.

// const numbers = [1, -2, 3, -4, 5, -6];
// let positiveNumbers = [];
// for(i = 0; i <= numbers.length; i ++){
//     if(numbers[i] > 0){
//         positiveNumbers.push(numbers[i]);
//     }
// }
// console.log(positiveNumbers);

// 6. Создайте пустой массив doubledNumbers. Используя цикл, умножьте каждый элемент из массива numbers на 2 и добавьте результаты в doubledNumbers с использованием метода push.

// const numbers = [1, -2, 3, -4, 5, -6];
// let doubleNumbers = [];
// for(let i = 0; i < numbers.length; i++){
//     doubleNumbers.push(numbers[i] * 2)
// }
// console.log(doubleNumbers);

// *7. Создайте пустой массив vowels. Используя цикл, найдите и добавьте все гласные буквы из строки "Hello, World!" в массив с использованием метода push. Вам также понадобится использовать метод includes().

const str = 'Hello, World!';
let vowels = [];
const trueVowels = ['a','e','i','o','u','y'];   // переменная с массивом допустимыми символами
for(let i = 0; i <= str.length; i++){
    if(trueVowels.includes(str[i])){   // проверка, содержиться ли str[i] символ в trueVowels! 
    vowels.push(str[i])     // если да, то пушит его в vowels
    }
}
console.log(vowels);