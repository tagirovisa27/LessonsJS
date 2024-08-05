
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
  savings: true
}

function chooseExpenses() {
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
}
chooseExpenses();

function detectDayBudget() {
  appDate.moneyPerDay = (appDate.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appDate.moneyPerDay + 'руб.');
}
detectDayBudget();

function detectLevel() {
  if (appDate.moneyPerDay < 2000) {
    alert('Минимальная зарплата');
  } else if (appDate.moneyPerDay > 2000 && appDate.moneyPerDay < 3000) {
    alert('Средняя зарплата');
  } else if (appDate.moneyPerDay > 3000) {
    alert('Высокая зарплата');
  } else {
    alert('Ошибка!');
  }
}
detectLevel();

function checkSavings() {
   if (appDate.savings == true) {
      let save = +prompt('Какова сумма накоплений?'),
        perсent = +prompt('Под какой процент?');

        appDate.monthIncome = (save/100/12*perсent).toFixed();
          alert('Доход в месяц с вашего депозита: ' + appDate.monthIncome);  
   }  
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
     let questionOptExpenses = prompt('Статья необязательных расходов?');
     appDate.optionalExpenses[i] = questionOptExpenses;
  } 
}
chooseOptExpenses();