
// Программа для рассчета финансовых 
// показателей на JavaScript

let money, time;

function start() {
  money = +prompt('Какая у вас зарплата на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Какая у вас зарплата на месяц?', '');
  }
}
start();

let appDate = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', '');
      b = +prompt('Во сколько обойдется?', '');

      if (typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a != '' && b != '' && a.length < 10) {
        appDate.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appDate.moneyPerDay = (appDate.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appDate.moneyPerDay + 'руб.');
  },
  detectLevel: function () {

    if (appDate.moneyPerDay < 2000) {
      alert('Минимальная зарплата');
    } else if (appDate.moneyPerDay > 2000 && appDate.moneyPerDay < 3000) {
      alert('Средняя зарплата');
    } else if (appDate.moneyPerDay > 3000) {
      alert('Высокая зарплата');
    } else {
      alert('Ошибка!');
    }
  },
  checkSavings: function () {
    if (appDate.savings == true) {
      let save = +prompt('Какова сумма накоплений?'),
        perсent = +prompt('Под какой процент?');

      appDate.monthIncome = (save / 100 / 12 * perсent).toFixed();
      alert('Доход в месяц с вашего депозита: ' + appDate.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let opt = prompt('Статья необязательных расходов?');
      appDate.optionalExpenses[i] = opt;
    }
  },
  chooseIncome: function () {

    let items = prompt('Что приенесет дополнительный доход? (Перечистлите через запятую)', '');

    if ((typeof (items)) != 'string' || items == '' || typeof (items) == null) {
      alert('Вы ввели неправильные дынные');
    } else {
      appDate.income = items.split(', ');
      appDate.income.push(prompt('Может что-то еще?'));
      appDate.income.sort();
    }
    appDate.income.forEach(function (massive, i) {
      alert('Способы доп. заработка: ' + (i++) + ' - ' + massive)
    })
  }
};

for (let key in appDate) {
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appDate[key]);
}
