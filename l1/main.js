'use strict';
// var leftBorderWight = 1; // глобальная переменная 
// let second = 2; // переменная, которая создается во время чтения кода
// var sym = Symbol(); // тип данных Symbol
// var boolean = true; // true/false

// const pi = 3.14; // константа, значение неизменяемое
// console.log(4/0); // лог в консоли ( Inf )
// console.log('x'*5); // лог в консоли ( NaN )
// let smth; // 
// console.log(smth); // лог в консоли ( undefined )

// let persone = {
//     name: "John",
//    age: 25,
//     isMarried: false
// };

// console.log(persone.name);
// console.log(persone["name"]); // для выбора используется persone.x или persone["x"]

// let arr = ["plum.png", "apple.jpeg", "lamp.bmp"]; // массив 
// console.log(arr[2]) // нумерация идет с 0 

// alert("Hello"); // алерт

// let answer = confirm("Are you here?"); // вопрос
// console.log(answer);

// let answer = prompt("Are you here?", "Yes"); // вопрос с вводом ("Вопрос", "готовый ответ")
// console.log(answer, typeof(answer)); // typeof - для получения типа данных
// console.log(typeof(arr));
// console.log(typeof(null));

// console.log(arr + persone["name"]);
// console.log(4 + persone["name"]);

// let answer = +prompt("Are you here?", "Yes"); // + перед prompt переводит String в Number

let incr = 10,
    decr = 10;

// incr++;
// decr--;
console.log(incr++, decr++)

console.log(5%2);
console.log("2" == 2);
console.log("2" === 2);

let isChecked = true,
    isClosed = false;
console.log(isChecked && isClosed);
console.log(isChecked || isClosed);
console.log(isChecked || !isClosed);