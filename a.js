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

