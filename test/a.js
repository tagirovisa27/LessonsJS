// let lastName = 'isa',
//     age = 23;

// document.write('Пользователю ' + lastName + ' ' + age + ' года' );

// Интерполяция ES6

let lastName = 'isa',
    age = 23;

document.write(`Пользователю ${lastName} ${age} года`);  // Ввиде строк

function Array() {
    var items = [];

    for (let i = 0; i < 10; i++) {   // var не писать в цикле
        var item = function () {
            console.log(i);
        };
        items.push(item)
    }

    return items;
}

var arr = Array();

arr[1]();
arr[3]();
arr[6]();

let fn = () => {         // Стрелочная функция - аннонимная (без имени)
    console.log(this);   // также у стрелочной ф-ии нет своего контекста берет у родителя  
};

// fn();

let obj = {
    num: 10,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let event = () => {
        console.log(event);
    };
    event();
});

function calcOrDoumble(number, basis = 2) {   // Параметры по умолчанию
    // basis = basis || 2;  ES5 
    console.log(number * basis)
};
calcOrDoumble(2, 3);
calcOrDoumble(5);

class Rectangle {                               //Классы
    constructor(height, width = 20) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);

console.log(square.calcArea());

let video = ['youtube', 'ivi', 'rutube'];        //Spread-операторы - Оператор разворота (Массив данных)                  
    blogs = ['wordpress', 'live', 'bloger'];
    internet = [...video, ...blogs, 'vk', 'telegram'];

console.log(internet);


function log (a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

let numbers = [2, 5, 7];

log(...numbers);