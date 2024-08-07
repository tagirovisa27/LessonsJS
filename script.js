
let array = [1, 2, 3, 4, 5];

array.pop();
array.push('5');
array.shift();
array.unshift('1');

console.log(array);
// // [ '1', 2, 3, 4, '5' ]


for (let i = 0; i < array.length; i++) {
  console.log(array[i]);  
}
// // 1 2 3 4 5
// console.log(array.length); 
// // 5 +1 array.length

array.forEach(function(item, i, arr) {
    console.log(i + ': ' + item + ' (Массив: ' + arr + ')');
})


let mass = [1, 2, 3,];

for(let key in mass) {
  console.log(key);
}
// // [0 1 2]

let massy = [1, 2, 3,];

for(let key of massy) {
  console.log(key);
}
// // [1 2 3]

let ans = prompt('',''),
    arry = [];

  arry = ans.split(',');
  console.log(arr);
    // 0: "isa"
    // 1: "tagirov"
    // 2: "university"
    // length: 3

let arrs = ['isa', 'tagirov', '23'],
a = arrs.join(', ');

console.log(arr);
console.log(i);
// // [ 'isa', 'tagirov', '23' ]
// // isa, tagirov, 23


let ar = ['b', 'a', 'c'],
is = ar.sort();

console.log(arr);
// [ 'a', 'b', 'c' ]

let arr = [2, 1, 3],
i = arr.sort(array);

function array(a, b) {
  return a - b;
}
console.log(arr);
// [ 1, 2, 3 ]

