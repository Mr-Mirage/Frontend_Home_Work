// 1. Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.
const numSum = (num1, num2) => num1 + num2;
console.log(numSum(3,7));

// 2. Напишите функцию, которая принимает число в качестве аргумента и возвращает его факториал 
// (произведение всех положительных целых чисел от 1 до этого числа).

const factorial = num => {
    
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }

    return result
}
console.log(factorial(5));

// 3. Напишите функцию, которая принимает число в качестве аргумента и возвращает true,
//  если число четное, и false, если число нечетное.
const oddOrEven = num => num % 2 === 0 ? 'true' : 'false'; 
// {
//     if(num % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// }
console.log(oddOrEven(8));

// 4. Напишите функцию, которая принимает строку в качестве аргумента и возвращает true, 
// если строка является палиндромом (читается одинаково слева направо и справа налево), и false в противном случае.
const palindrom = str => {

   return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}


console.log(palindrom('А роза упала на лапу Азора'));

// 5. Напишите функцию, которая принимает строку в качестве аргумента и возвращает ее длину
const strLength = str => str.length;
console.log(strLength('Hey'));

