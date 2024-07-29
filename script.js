
// Программа для рассчета финансовых 
// показателей на JavaScript

let money = +prompt('Какая у вас зарплата на месяц?');

time = prompt('Введите дату в формате YYYY-MM-DD');

let appDate = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', '');
      b = prompt('Во сколько обойдется?', '');

  if (typeof(a) === 'string' && (typeof (a)) != null && (typeof (b)) != null
      && a != '' && b != '' && a.length < 10) {

    console.log('done');

    appDate.expenses[a] = b;

  } else {
     console.log('Ошибка!');
     i--;
  }
};

// let i = 0;

// while (i < 2) {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//       b = prompt('Во сколько обойдется?', '');

//   if (typeof(a) === 'string' && (typeof (a)) != null && (typeof (b)) != null
//       && a != '' && b != '' && a.length < 10) {

//     console.log('done');

//     appDate.expenses[a] = b;

//   } else {
//      console.log('Ошибка!');
//      i--;
//   }
//   i++;
// }


// let i = 0; 

// do {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//       b = prompt('Во сколько обойдется?', '');

//   if (typeof(a) === 'string' && (typeof (a)) != null && (typeof (b)) != null
//       && a != '' && b != '' && a.length < 10) {

//     console.log('done');

//     appDate.expenses[a] = b;

//   } else {
//      console.log('Ошибка!');
//      i--;
//   }
//   i++;
// }
// while (i < 2);


appDate.moneyPerDay = appDate.budget / 30;

alert('Ежедневный бюджет: ' + appDate.moneyPerDay);

if (appDate.moneyPerDay < 2000) {
  console.log('Минимальная зарплата');
} else if (appDate.moneyPerDay > 2000 && appDate.moneyPerDay < 3000) {
  console.log('Средняя зарплата');
} else if (appDate.moneyPerDay > 3000) {
  console.log('Высокая зарплата');
} else {
    console.log('Ошибка');
}

alert('Бюджет на один день составляет: ' + appDate.moneyPerDay + 'руб.');

console.log(appDate);

