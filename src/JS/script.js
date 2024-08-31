let startBtn = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

  expensesItem = document.getElementsByClassName('expenses-item'),

  appOffBtn = document.getElementsByTagName('button')[0],
  appOnBtn = document.getElementsByTagName('button')[1],
  calcBtn = document.getElementsByTagName('button')[2];

optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

  incomeItem = document.querySelector('.choose-income'),
  savingsBtn = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

let money, time;

calcBtn.disabled = true;
appOffBtn.disabled = true;
appOnBtn.disabled = true;
incomeItem.disabled = true;
sumValue.disabled = true;
percentValue.disabled = true;

startBtn.addEventListener('click', () => {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Какая у вас зарплата на месяц?', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Какая у вас зарплата на месяц?', '');
  }
  appDate.budget = money;
  appDate.timeDate = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  calcBtn.disabled = false;
  appOffBtn.disabled = false;
  appOnBtn.disabled = false;
  incomeItem.disabled = false;
  sumValue.disabled = false;
  percentValue.disabled = false;
});

appOffBtn.addEventListener('click', () => {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

    if (typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null
      && a != '' && b != '' && a.length < 10) {
      appDate.expenses[a] = b;
      sum += +b;
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});

appOnBtn.addEventListener('click', () => {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appDate.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appDate.optionalExpenses[i] + ' ';
  }
});

calcBtn.addEventListener('click', () => {

  if (appDate.budget != undefined) {
    appDate.moneyPerDay = (appDate.budget / 30).toFixed();
    dayBudgetValue.textContent = appDate.moneyPerDay;

    if (appDate.moneyPerDay < 20000) {
      levelValue.textContent = 'Минимальная зарплата';
    } else if (appDate.moneyPerDay > 20000 && appDate.moneyPerDay < 30000) {
      levelValue.textContent = 'Средняя зарплата';
    } else if (appDate.moneyPerDay > 30000) {
      levelValue.textContent = 'Высокая зарплата';
    } else {
      levelValue.textContent = 'Ошибка!';
    }
  }
});

incomeItem.addEventListener('input', () => {
  let items = incomeItem.value;
  if (isNaN(items) || items != '') {
    appDate.income = items.split(', ');
    incomeValue.textContent = appDate.income;
  }
});

savingsBtn.addEventListener('click', () => {
  if (appDate.savings == true) {
    appDate.savings = false;
  } else {
    appDate.savings = true;
  }
});

sumValue.addEventListener('input', () => {
  if (appDate.savings == true) {
    let = sum = +sumValue.value,
      percent = +percentValue.value;
    appDate.monthIncome = sum / 100 / 12 * percent;
    appDate.yearIncome = sum / 100 * percent;
    monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appDate.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', () => {
  if (appDate.savings == true) {
    let = sum = +sumValue.value,
      percent = +percentValue.value;
    appDate.monthIncome = sum / 100 / 12 * percent;
    appDate.yearIncome = sum / 100 * percent;
    monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appDate.yearIncome.toFixed(1);
  }
});

const appDate = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
