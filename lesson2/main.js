'use strict';

if (3 * 4 == 8) {
    console.log('верно')
} else {
    console.log('неверно')
}

let num = 50;

if (num < 49) {
    console.log('неверно');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('это так')
}

(num == 50) ? console.log('Верно'): console.log('Неверно');

switch (num) {
    case num < 49:
        console.log('неверно');
        break;
    case num > 100:
        console.log('Много');
        break;
    case num > 100:
        console.log('Много');
        break;
    case 50:
        console.log('Получилось');
        break;
    default: 
        console.log('что то пошло не так');
        break;
}

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if(i == 6) {
        continue;
    }
    console.log(i);
}
