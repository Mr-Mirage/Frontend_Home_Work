// 1. Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа

// const oddNumbers = arr => arr.filter(elem => elem % 2 === 0);
// console.log(oddNumbers([1,2,3,4,5,6,7,8]));

// 2. *Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только те строки, которые начинаются с буквы A.

// const aStrings = arr => arr.filter(elem => elem.charAt(0).toLowerCase() === 'a' ); // .charAt(индекс) - возыращает указанный символ строки
// console.log(aStrings(['Hello', 'Anna', 'anakonda', 'Kurs', 'Attake']));


// 3. Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа

// const positiveNumbers = arr => arr.filter(elem => elem > 0);
// console.log(positiveNumbers([1,-20,5,-6]));

// 4. *Напишите функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы

// const uniqueValue = arr => arr.filter((value, index, array) => arraay.indexOf(value) === index);
// value - текущий элемент массива, index - его индекс, arraay сам массив
// .indexOf - условие фильтрации, первое вхождение елема в новый массив
// console.log(uniqueValue([1,2,3,2,4,1,7]));

// const getUniqueElems = arr => {
//     const new_arr = [];
  
//     arr.forEach(el => {
//       if(!new_arr.includes(el)){    //в new_arr нет элемента el?
//         new_arr.push(el)
//       }
//     })
  
//     return new_arr
//   }
// console.log(getUniqueElems([1,2,3,2,4,1,7]));

// const uniqueElements = arr => arr.filter((element, index, array) => array.indexOf(element) === index);
// // Пример использования:
// const inputArray = [1, 2, 2, 3, 4, 4, 5];
// const resultArray = uniqueElements(inputArray);
// console.log(resultArray);




