// // let timerId = setTimeout(sayHello, 3000);
// // clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello world!');
// };

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello world!');
// };

// let time = setTimeout(function log(){
//    console.log('isa');
//    setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function animation() {
    let pos = 0;

    let timeId = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(timeId);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', animation);


let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('yes');
    }
});