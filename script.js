
let soldier =  {
  health: 100,
  armor: 100
};

let johnden = {
  health: 100,
};

johnden.__proto__ = soldier;

console.log(johnden);
console.log(johnden.armor);


