// 3 4 6
// 'string', 'string', 'string';
// true/false

// let a;
// console.log(a);

// const obj = {
//     name: 'Alex'
// };

//              0  1  2  3
// const arr = [1, 2, 3, 4];

// - to String

// 1)
console.log(typeof(String(null)));
// 2)
console.log(typeof('www' + false));
console.log('https://vk.com/catalog/' + 5);

// - to Nuber 

// 1) 
console.log(typeof(Number('5')));
// 2) 
console.log(typeof(5 + +'5'));
// 3)
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt('hello?', '');

// 0, '', null, undefined, NaN - всегда false

// 1)

let switcher = null;

if (switcher) {
    console.log('not_working..');
}

switcher = 1;

if (switcher) {
    console.log('working..');
}

// 2)

console.log(typeof(Boolean('5')));

// 3)

console.log(typeof(!!'5'));

// Ответы на вопросы
// 1) 5
// 2) NaN
// 3) 2
// 4) 12
// 5) 1
// 6) null
// 7) да, boolean и string
// 8) 3
// 9) нет
// 10) Infinity
// 11) нет
// 12) 2