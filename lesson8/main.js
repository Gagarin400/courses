let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('вы нажали первую кнопку');
// };

// btn[0].onclick = function() {
//     alert('вы опять нажали первую кнопку');
// };

btn[0].addEventListener('click', function(e) {
    // console.log(event);
    // let target = event.target;
    // target.style.display = 'none';
    console.log('произошло событие: ' + event.type + ' на элементе' + event.target);
});
wrap.addEventListener('click', function() {
    console.log('произошло событие: ' + event.type + ' на элементе' + event.target);

});
// btn[0].addEventListener('click', function() {
//     alert('вы опять нажали первую кнопку');
// });
// btn[0].addEventListener('mouseenter', function() {
//     alert('вы навели на первую кнопку');
// });
link.addEventListener('click', function(e) {
    event.preventDefault();
    alert('вы опять нажали первую кнопку');
});
btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('вышли!');
    });
});