'use strict';

let money, time;
    
function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: {},
    savings: true
};

function chooseExpensise() {
    for (let i = 0;i < 2;i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = +prompt('Во сколько обойдется?');
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50) {
            console.log('ok');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
            continue;
        }
    }
}
chooseExpensise();

// второй способ
// let i = 0;

// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = +prompt('Во сколько обойдется?');

//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
//         && a != '' && b != '' && a.length < 50) {
//         console.log('ok')
//         appData.expenses[a] = b;
//     } else {
//         continue;
//     }
//     i++;
// }

// третий способ
// let i = 0;

// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = +prompt('Во сколько обойдется?');

//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
//         && a != '' && b != '' && a.length < 50) {
//         console.log('ok')
//         appData.expenses[a] = b;
//     } else {
//         continue;
//     }
//     i++;
// }
// while (i < 2);

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('ты нищий');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('ты чуть лучше мусора');
    } else if (appData.moneyPerDay > 2000) {
        console.log('ты норм');
    }else {
        console.log('нам передали не текст');
    }
}

function checkSavings() {
    if (appData.savings == true ) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (money/30).toFixed();
    alert("Ваш бюджет на 1 день = " + appData.moneyPerDay);
}

detectDayBudget();

let optionalExpenses = {};
function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt('Статья необязательных расходов');
        if(typeof(a) === 'string' && typeof(a) != null && a != '' 
        && a.length < 50) {
            optionalExpenses[i] = a;
        } else {
            i = i - 1;
            continue;
        }
    }
}
chooseOptExpenses();