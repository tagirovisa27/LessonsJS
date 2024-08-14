
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHearth = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'black';
btn[1].style.backgroundColor = 'blue';
btn[0].style.borderRadius = '50px';

circles[0].style.background = 'red';
circles[1].style.background = 'yellow';
circles[2].style.background = 'green';

// for(i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//    item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div');
let text = document.createTextNode('Programmer');

div.classList.add('black');

// document.body.appendChild(div);

// wrapper.appendChild(div);

// div.innerHTML = '<h2>Programmer</h2>';

div.textContent = 'Programmer';

document.body.insertBefore(div, circles[0]);
document.body.removeChild(circles[1]);

wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circles[0]);

