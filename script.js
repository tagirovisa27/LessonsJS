
// // Типы данных в JS

// let string = 'isa';  -  Строка
// let number = 23;     -  Число
// let boolean = true;  -  Логический
// let sym = Symbol();  -  Символные 
// let object = {};     -  Комплексные
// null;                -  Неизвестное
// undefined;           -  Неприсвоенно

console.log(4/0); 
// Infinity

console.log(10 / 'str');
// NaN

let phone;
console.log(phone);


let player = {
    LastName: 'Isa',
    age: 23
}

console.log(player['LastName']);
console.log(player.age);


let number = [10, 20, 30];
console.log(number[2]);

// alert('Привет мир');

// prompt('Это ты?');

// confirm('Да, это я')

console.log(typeof('Пргеры'));


console.log('isa' + ' tagirov');

console.log('isa' + 23);

// let tag = +prompt('ееее');

console.log(typeof(tag));

// typeof - Проверяет значение то есть какой тип данных введен

// '+' - Унарный плюс, если вставит перед значением меняет строку на число

let incr = 5;
decr = 6;

console.log(++incr);

console.log(--decr);

console.log(10 % 4);

console.log(10 == 10);

console.log(10 === '10');

let button = false;
    buttons = true;

    console.log(button && buttons);
    console.log(button || buttons);    
    console.log(button || !buttons);