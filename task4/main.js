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
    optionalExpenses: {},
    income: {},
    savings: true,
    chooseExpensise: function(){
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (money/30).toFixed();
        alert("Ваш бюджет на 1 день = " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('ты нищий');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('ты чуть лучше мусора');
        } else if (appData.moneyPerDay > 2000) {
            console.log('ты норм');
        }else {
            console.log('нам передали не текст');
        }
    },
    checkSavings: function() {
        if (appData.savings == true ) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt('Статья необязательных расходов');
            if(typeof(a) === 'string' && typeof(a) != null && a != '' 
            && a.length < 50) {
                appData.optionalExpenses[i] = a;
            } else {
                i = i - 1;
                continue;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)', '');
        if (typeof(items) === 'string' && typeof(items) != null 
        && items != '') {
            appData.income = items.split(', ');
            chooseIncomeOther();
        }else {
            appData.chooseIncome();
            return;
        }

        let allIncome = [];
        appData.income.forEach(function(item, i) {
            i = i + 1;
            allIncome[i] = ' ' + i + ': ' + item;
        });
        allIncome.shift();
        alert('Способы доп. заработка:' + allIncome);
        appData.income.sort();
    }
};

function chooseIncomeOther() {
    let incomeOther = (prompt('Может что-то еще?'));
    if (typeof(incomeOther) === 'string' && typeof(incomeOther) != null
    && incomeOther != '') {
        appData.income.push(incomeOther);
    }
    else {
        chooseIncomeOther();
        return;
    }
}
// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// }
// appData.chooseExpensise();
// appData.detectDayBudget();
// appData.checkSavings();
// appData.chooseOptExpenses();
appData.chooseIncome();