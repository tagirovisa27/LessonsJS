// 1-й урок

// Переменные - это хранилищя информации (данных)

// var - существует везде в коде 
// let - создается когда код доходит до нее (хостинг) {} 
// const - Константум нельзя поменять ее название

// var user = 'isa';
// let numberPi  = 10;
// const head = 1;

// Имя переменной можно состоять из букв, цифр, 
// символов доллара, и нижняя подчеркивание
// Первый символ не должен быть цифрой
// В названии переменных нельзя использовать такие слова как:
// error alert prompt итд
// Переменные должны быть написаны в формате Кэмалкейс
// В названии переменной должен быть смысловое слово


// 2-й урок

// Типы данных

// number - 1,2,3... NaN Infinity
// String - '', "", 
// Boolean true/false
// null - 0
// undefined - []
// Symbol(); - @!# 
// Object{} - [complex data]


// 3-й урок

// Функции для вывода информации (модальная окно)

// alert - Вывод на странице
// prompt - Вывод на странице
// confirm - Вывод на странице
// console.log(); - Вывод в консоль (Консоль разработчика)

// let a = +prompt('aaa'); '+' изменяет тип данных 1 <=> Aa  
// console.log(typeof(a)); typeof - Проверяет какой тип данных веден

// Префиксная и постфиксная форма 
// Префиксная форма возвращает измененная значения ++a1
// Постфиксная форма возвращает старая значения a1--

// let box = 2,
//     dox = 3;

// box++;
// dox--;

// console.log(box);
// console.log(dox);

// console.log(10%2); % - Возвращает остаток деления


// 4-й урок

// Операторы 

// = Знак присваивание - let = 1;
// == Знак равенство  - console.log(2 == 2);
// === Проверка по типом данных - console.log(1 === 'string');

// && И - Выдает правду если обе варианты правдивы 
// let a = true;
// let b = true;
// console.log(a && b);

// || ИЛИ - Выдает правду если один из вариантов привильный
// let a = true;
// let b = false;
// console.log(a || b);

// let a = false;
// let b = false;

// console.log(a && b); 
// console.log(a || b);
// false

// ! - Оператор отрицание, обратное значение, trur на false  

// let a = false;
// let b = false;

// console.log(a && b); 
// console.log(a || !b);


// 5-й урок

// Условия

// > - Знак больше 
// < - Знак меньше 

// if (2 * 4 == 8) {
//     console.log('Верно!');
// } else {
//     console.log('Неверно!');
// }

// Вложенные условия 

// let num = 50;

// if (num < 49) {
//     console.log('Неверно!');
// } else if (num > 100) {
//     console.log('Много!');
// } else {
//     console.log('Верно!');
// }

// Тернарный оператор 
// (num == 50) ? console.log('Верно!') : console.log('Неверно!');

// switch case - Условия конструкция, 
// модефекация поддерживает несколько if/else

// switch (num) {
//     case num < 49:
//         console.log('Неверно!');
//         break;
//     case num > 100:
//         console.log('Много!');
//         break;
//     case num > 80:
//         console.log('Все еще много!');
//         break;
//     case 50:
//         console.log('Верно!');
//         break;
//     default:
//         console.log('Что-то пошло не так!');
//         break;      
// }


// 6-й урок

// Циклы - действия которая повторяется несколько раз 

// while - проверка -> действия 
// do while - действия -> проверка
// for - условия шаги действия 

// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }


// do {
//   console.log(num);
//   num++;
// }
// while (num < 55)

// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }


// В таком случай цикл будет работать
// до определенного момента - до 6 (break) 

// for (let i = 1; i < 8; i++) { 
//   if (i == 6) {
//     break;
//   }
//   console.log(i);
// }


// В таком случай цикл пропускает число - 6 

// for (let i = 1; i < 8; i++) { 
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }


// 7-й урок

// Функция - это именованная часть кода, 
// действия которая происходит если нажмем на кнопку (пример)  

// function showMessage(text) {    text - аргумент который передается 
//     alert(text);
// }
// showMessage('hello world');


// Замыкания функций, если переменная будет внутри функции
// то она видна только внутри функций (локально) 
// Глобальная переменная 
// Внутри функции можно изменять переменную  
// Когда внутри функций есть переменная она будет искать ее
// внутри себя, а потом вне

// function startBtnClick() {
//    let first = 1;
// }

// console.log(first);
// startBtnClick();

// let first = 1;

// function firstNumber(text) {
//     console.log('Число ПИ');
//     first = 2;
// } 
// firstNumber(first);
// console.log(first);

// return - возвращает значения 

// function calc(a, b) {
//     return(a + b);
// }
// console.log(calc(2,2));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// function declaration - объявление еще до ее вызова, как переменнвя var
// function expression - это когда функция внутри переменной 

// Стрелочная функция - не имеет контекст вызова

// let calc = (a,b) => a + b;
// console.log();

// Методы и свойство у строка чисел

// Пример:

// let userName = 'isa';
// let age = '24,5';

// console.log(userName.length);
// console.log(parseFloat(age));


// 8-й урок

// Callback-функции  - это функция которая выполняется 
// после того как другая функция завершила свое выполнения 
// Вторая функция выполняется сразу после первой 
// В качестве аргумента любая функция может взять другую функцию
// это - Callback-функция

// function LearnJS(lang, callback) {
//     console.log('Я учу ' + lang);
//     callback();
// }

// LearnJS('JavaScript', function() {
//     console.log('Я прошел урок!');
// }) 

// function done() {
//     console.log('Я прошел урок!');
// }

// LearnJS('JavaScript', done);


// 9-й урок

// Объекты - это комплексный тип данных, - ключ: значение,
// В свойство объекта можно вложить любой тип данных
// В объект можно вложить другой объект (большой объект - глобальный)
// (Методы и свойство объекта) Свойство - это что из себя представляет 
// сам объект, а методы это его действия, что объект может сделать 


// let options = {
//     width: 100,
//     height: 100,
//     name: "test"
// };

// console.log(options.name);
// options.bool = true; - добавление свойсво объекта

// options.colors = {   - объект внутри другого объекта
//     border: "black",
//     bg: "red"
// };

// delete options.bool; - удаление свойсво объекта
//console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);


// 10-й урок

// Массивы и псевдомассивы - это структуры которые 
// содержат элементы по порядку


// let arr = [1, 2, 3]; - Массив

// arr.push(); - добавление элемента в конце
// arr.pop(); - удаление элемента с конца 
// arr.unshift(); - добавление элемента в начале
// arr.shift(); - удаление элемента в начале

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + '(массив: ' + mass + ')');
// }); 

// let mass = [1, 2, 3];

// for (let key in mass) {  - Выводить только ключи у массивов
//     console.log(key);
// }

// for (let key of mass) {  - Выводить только значение у массивов
//     console.log(key);
// }

// let ans = prompt('', ''), 
//     arr = [];

// arr = ans.split(','); - Разделяет массив     
// console.log(arr);

// let arr = ['aaa', 'bbb', 'ccc']; 
//     i = arr.join(', '); - Делает одну строку 
 
// console.log(i);

// let arr = ['bbb', 'hhh', 'aaa']; 
//     i = arr.sort(); - Сортирует массив по алфавиту

//  console.log(arr); 

// let arr = [5, 2, 1];
//     i = arr.sort(compareNum); - Сортирует массив чисел по порядку

// function compareNum(a,b) {
//   return a-b; 
// }
// console.log(arr); 


// 11-й урок 

// Объектно-ориентированное программирование - это парадигма
// программирования, в которой программа строится вокруг объектов, 
// объединяющих данные (свойства) и действия (методы), взаимодействующих 
// друг с другом

// let soldier = {
//     health: 100,
//     armor: 100
// };

// let join = {
//     health: 100
// };

// join.__proto__ = soldier;

// console.log(join);
// console.log(join.armor);


// 12-й урок 

// Динамическая типизация - это превращение
// одного типа данных в другой (конкатенация)

// Превращение в строку 

// console.log(typeof('isa' + 27));
// console.log(typeof('isa' + true));
// console.log('https://vk.com/catalog/' + 5);

// Превращение в число

// console.log(typeof(+'isa27'));
// let user = +prompt('hello', '');

// 0, '', null, undefined, NaN - всегда false 
// а всё остальное true 