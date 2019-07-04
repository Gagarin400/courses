'use strict';

let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: {},
    savings: false
};

for (let i = 0;i < 2;i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = +prompt('Во сколько обойдется?');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log('ok')
        appData.expenses[a] = b;
    } else {
        i = i - 1;
        continue;
    }
}

while ()

appData.moneyPerDay = money/30;

console.log(appData.moneyData);
console.log(appData.timeData);
console.log(appData.expenses);
alert("Ваш бюджет на 1 день = " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('ты нищий');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('ты чуть лучше мусора');
} else if (appData.moneyPerDay > 2000) {
    console.log('ты норм');
}else {
    console.log('нам передали не текст');
}