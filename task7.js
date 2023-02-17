

/* задание 7*/

let arr = [7, 5, 3, 2, 4, 0, '0', 'слово', NaN, Infinity];
let zero = 0;
let odd = 0;
let even = 0;

for(let i = 0; i < arr.length; i++) { 
    
    if (Number.isFinite(arr[i]))  {
        if (arr[i]===0) {    
            zero += 1;
    } else if (arr[i]%2 == 0 ) {
            even += 1;
    } else {
            odd += 1; 
    }
}
}

let strZero = (zero==1 ? `${zero} нулевой` : `${zero} нулевых`)
let strEven = (even==1 ? `${even} нулевой` : `${even} нулевых`)
let strOdd = (odd==1 ? `${odd} нулевой` : `${odd} нулевых`)

console.log(`В массиве ${strZero}, ${strEven} и ${strOdd} элементов`);

