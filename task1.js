
/*Задание 1*/


let a = prompt ('введите что-нибудь');
console.log(typeof a);
let b = +a ;
if (Number.isNaN(b)) {
        console.log('введено не число')
}   else if (a % 2 === 0) {
        console.log('число чётное')
}    else {
        console.log('число нечётное')
}  


