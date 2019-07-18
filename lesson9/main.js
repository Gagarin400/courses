// new RegExp('pattern', 'flags');
// /pattern//flags;

// let ans = prompt('Введите ваше имя;');

// let reg = /n/ig;

// // console.log(ans.search(reg));
// console.log(ans.match(reg));

// console.log(reg.test(ans));

// флаги 
// i , g, m

// let pass = prompt('Введите пароль');

// console.log(pass.replace(/./g, "*"));
// alert('12-34-56'.replace(/-/g, ":"));

// let ans = prompt('Введите число');

// let reg = /\d/g;

// console.log(ans.match(reg));

// let str = 'My name is /R2D2';

// console.log(str.match(/\//i));

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello world');
// }

// let timerId = setTimeout(function log(){
//     console.log('hello world');
//     setTimeout(log, 3000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
            btn.disabled = false;
        }else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            btn.disabled = true;
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(e) {
    if(event.target && event.target.matches('button.first')) {
        console.log('hello');
    }
});