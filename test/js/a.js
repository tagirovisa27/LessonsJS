// // Инкапсуляция

// function User(name, age) {
//     this.name = name;
//     // this.age = age;
//     let userAge = age;

//     this.say = function () {
//         console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
//     }

//     this.getAge = function () {
//         return userAge;
//     }

//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 30) {
//             userAge = age;
//         } else {
//             console.log('Ошибка!');
//         }
//     }
// }

// let Isa = new User('Isa', 23);
// console.log(Isa.name);
// console.log(Isa.userAge);

// console.log(Isa.getAge());
// Isa.setAge(24);
// console.log(Isa.getAge());

// Isa.say();

// Анонимная самовызовающая функция (Модули)

let number = 1;

(function () {
    let number = 2;
    console.log(number);

    return console.log(number + 3);
}());

console.log(number);

// Использование объектного интерфейса

let user = (function () {
    let privat = function () {
        console.log('I ma privat');
    }

    return {
        sayHello: function () {
            console.log('Hello!');
        }
    }
}())

console.log(user);
console.log(user.sayHello());


// Все созданные методы скрыты снаружи 

let users = (function () {
    let privat = function () {
        console.log('I ma privat');
    }

    let sayHello = function () {
        console.log('Hello!');
    }

    return {
        sayHello: sayHello
    }
}())

console.log(user);
console.log(user.sayHello());