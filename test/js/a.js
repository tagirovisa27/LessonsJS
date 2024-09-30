localStorage.setItem('number', 1);

console.log(localStorage.getItem('number'));

localStorage.removeItem('number');

localStorage.clear();

let persone = {
    name: 'Isa',
    age: 23,
    tech: ['mobile', 'notebook', 'books']
}

let serializedPersone = JSON.stringify(persone);
    localStorage.setItem('Isa', serializedPersone);

console.log(JSON.parse(localStorage.getItem('Isa')));
