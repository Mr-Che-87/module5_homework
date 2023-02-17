/*задание 6*/

let arr = [2, 2, '2'];
let result = true
for(let i = 0; i < arr.length; i++) {   
   
    if (arr[0] !== arr[i]) {
        result = false;
        
        break;
    } 
}
console.log(result);



/* бонус:   если бы задача стояла: проверить, есть ли в массиве ХОТЬ ОДИН повторяющийся элемент, какой будет код?*/  
   

