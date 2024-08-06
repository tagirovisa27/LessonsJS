let divClassSection = {
  width: 100,
  height: 50,
  border: 10,
  color: 'black'
};

console.log(divClassSection['width']);
console.log(divClassSection.height);

divClassSection.bool = true;
divClassSection.title = 'text';
divClassSection.classNav = {
    list: 5,
    links: true
};

delete divClassSection.color;

console.log(divClassSection);


for (let key in divClassSection) {
    console.log('Свойство ' + key + ' имеет значение ' + divClassSection[key]);
}

console.log(Object.keys(divClassSection).length);
