let num = 20;

function showFirstMassege(text) {
  alert(text);
  let num = 10;
  console.log(num);
}

showFirstMassege('Привет!');

console.log(num);


function calculate(a,b) {
  return (a + b);
}

console.log(calculate(3,4));

console.log(calculate(8,4));

function retVar() {
  let num = 30;
  return num;
}

let a = retVar();

console.log(a);


let calc = function(a,b) {
  return (a + b);
}

// let calc = (a, b) => {a+b} 


// function declaration & expation


let str = 'test';

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

let number = '30.7px';

console.log(Math.round(number));

console.log(parseInt(number));

console.log(parseFloat(number));