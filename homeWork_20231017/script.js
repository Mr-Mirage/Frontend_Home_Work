// 1. Дан массив чисел numbers. Вывести в консоль все четные числа массива

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(elem => {
//     if(elem % 2 === 0){
//         console.log(elem);
//     }
// })

// 2. Напишите функцию, которая принимает массив со строками и возвращает новый массив. Если строка длиннее 5 символов, то в новый массив добавляется строка 'longer than 5', а если 5 и короче - то 'shorter than 5'

// const getLongerOrShorterString = str => {
//     const new_arr = [];
//     str.forEach(elem => new_arr.push(elem.length < 5 ? 'longer than 5' : 'shorter than 5'))   

// -----------------------------------

//         str.forEach((elem) => {
//             new_arr.push(elem.length > 5 ? 'longer than 5' : 'shorter than 5');
//         })
//         return new_arr
// }
// console.log(getLongerOrShorterString(['Anna', 'Irina', 'Natalia', 'Ivan', 'Stepan']));

//----------------------------

// const getLength = str => str.map(elem => elem.length > 5 ? 'longer than 5' : 'shorter than 5');
// console.log(getLength(['Anna', 'Irina', 'Natalia', 'Ivan', 'Stepan']));

// 3. Написать функцию changeStrings(), которая принимает массив с разными типами данных и возвращает новый массив, где все строки будут заменены на строку 'XXXXX'

// const changeStrings = str => str.map(elem => typeof elem === 'string' ? 'XXXXX' : elem )

// console.log(changeStrings(['Apple', 10, 'janzen', true, false]));

//-----------------------------------

const changeStrings = str => {
    const new_arr = [];
    str.forEach(elem => new_arr.push(typeof elem === 'string' ? 'XXXXX' : elem))
    return new_arr
}
console.log(changeStrings(['Apple', 10, 'janzen', true, false]));

