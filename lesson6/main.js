let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneheart = document.querySelector('.heart');
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';

btn[1].style.borderRadius = '100%';

circle[0].style.background = 'red';
circle[1].style.background = 'yellow';
circle[2].style.background = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.background = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('hello');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>hello world!</h1>';

div.textContent = 'hello world!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);

