'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    expense1 = prompt('Введите обязательную статью расходов в этом месяце'),
    expense2 = prompt('Во сколько обойдется?'),
    expense3 = prompt('Введите обязательную статью расходов в этом месяце'),
    expense4 = prompt('Во сколько обойдется?');

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: {},
    savings: false
};

appData.expenses.expense1 = expense2;
appData.expenses.expense3 = expense4;

console.log(appData.moneyData);
console.log(appData.timeData);
console.log(appData.expenses);
alert("Ваш бюджет на 1 день = " + money/30);