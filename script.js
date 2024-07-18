let num = 100;

if (num < 50) {
    console.log('Неверно!');
} else if (num > 150) {
    console.log('Много!');
} else {
    console.log('Верно!');
}

(num) == 100 ? console.log('Верно!') : console.log('Неверно!');


let number = 200;

switch (number) {
    case number < 100:
        console.log('Неверно!');
        break;
    case number > 100:
        console.log('Меньше!');
        break;
    case 200:
        console.log('Верно!');
        break;
}