// let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage('hello world');
// console.log(num);

// let calc = function calc(a,b) {
//     return (a + b);
// }

let calc = (a,b) => a + b;

console.log(calc(3,5));

console.log(calc(15,5));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = 'Test';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));