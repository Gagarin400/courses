let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    fiveMenuItem = document.createElement('div'),
    title = document.getElementById('title'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    promptBlock = document.getElementById('prompt'),
    promptAction = prompt('Ваше отношение к технике APPLE?');

// 1)

menu.insertBefore(menuItem[2], menuItem[1]);
fiveMenuItem.textContent = 'Пятый пункт';
fiveMenuItem.classList.add('menu-item');
menu.appendChild(fiveMenuItem);

// 2)

document.body.style.background = 'url(img/apple_true.jpg) center';

title.textContent = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

promptBlock.textContent = promptAction;




