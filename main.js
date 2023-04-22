

// let year = prompt('Какой сейчас год?')
// if(year == 2023){
//     alert('Всё верно!')
// }else{
//     alert('Это ошибка')
// }

// let year = prompt ('Какой сейчас год?') 
// if(year < 2023 && year !=''){ // здесь либо равен 2023 либо ничего не введено
//     alert ('Указан более ранний год')
// }
// else if(year > 2004){
//     alert('Указан более поздний год')
// }
// else if (year == ''){
// alert ('Ничего не введено')
// }
// else{
//     alert('Верно')
// }
// ? // аналог IF

// let summer;
// let week = prompt('Сколько недель летом?')
// if (week ==12){
//     summer = true
//     // alert(summer)
// }
// else{
//     summer = false
//     // alert(summer)
// }
// //           if(...) (что внутри if)    else(...) (что внутри else)
// let result = условие1 ? значение 1     :      значение 2

// let summer1 = (week ==12) ? true : false; // более короткий вариант if else
// let summer3 = week == 12 ?true:false; // ещё более короткий вариант (Ценится особо!)


// + сложение
// - вычитание
// * умножение
// / деление
// % остаток от деления
// ** возведение в степень 

// console.log(10 % 3);
// let a =2;
// let b =4;
// console.log(a**b)

// Операторы сравнения
// < 
// >
// >= больше или равно
// <= меньше или равно
// == равно
// === строгое равно
// != не равно

// console.log(5>6);

// Логический операторы
// || или
// && и 
// ! не

// let a=1
// let b=2
// // let result = a|| b 
// if(a >5 || b>1)
// console.log('good'){
//     else 
//     console.log ('no good');
// }

// Возможные исходы оператора ИЛИ
// ture||true //true
// false||false //true
// true||false //true
// false||false //false

// Возможные исходы оператора "И" 
// ture && true // true
// false && true // false
// true && false // false
// false && false // false

// let a = true
// console.log(!a) // оператор оборачивает результат в обратную сторону, а-ля false = true, true = false 

// ДОМАШНЕЕ ЗАДАНИЕ:

// let a = 10;
// let b = 5;
// let sum = a + b;

// if (sum > 15) {
//   console.log("ДА");
// } else {
//   console.log("НЕТ");
// }

let a = 5;
let b = "5";

if (a === b) {
  console.log("Переменные равны");
} else {
  console.log("Переменные не равны");
}