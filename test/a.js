// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('hello!' + this.name);
//     }
// }
// User.prototype.exit = function (name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// let isa = new User('isa', 23),
//     tagirov = new User('tagiov', 24);

// console.log(isa);
// console.log(tagirov);

// isa.exit();


// ES6

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log('hello! ${this.name}')
    }
    exit() {
        console.log('Пользователь ${this.name} ушел')
    }
}

let isa = new User('isa', 23);
let tagirov = new User('tagiov', 24);
console.log(isa);
console.log(tagirov);
isa.hello();
tagirov.hello();

function showThis(a, b) {
    console.log(this);
    function sum () {
      console.log(this);
      return a + b;
    }
    console.log(sum());
    
}
showThis(4,2);

let obj = {
    a: 20,
    b: 30,
    sum: function () {
        console.log(this);
    }
}
obj.sum();


let user = {
    name: 'Alex'
};

function sayName (surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith')); 
console.log(sayName.apply(user, ['Snow']));

function count (number) {
  return this * number;
}

let double = count.bind(2);
console.log(double(1));

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
   console.log(this);
   this.style.background = 'blue';
   function abc () {
     console.log(this);
   }
   abc();
});

// 1) Просто вызов функции - window/underfined ('use strict';)
// 2) Метод объекта - this объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind