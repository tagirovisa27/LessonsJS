
let money = prompt('Какая у вас заработная плата на месяц?');

time = prompt('Введите дату в формате YYYY-MM-DD');

let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let first = prompt('Введите обязательную статью расходов в этом месяце');

second = prompt('Во сколько обойдется?');

third = prompt('Введите обязательную статью расходов в этом месяце');

fourth = prompt('Во сколько обойдется?');


expenses: {
  first: '';
  second: '';
}

// appDate.expenses.first = second;

// appDate.expenses.third = fourth;

alert(appDate.budget / 30);