
/*задание 8*/

let myMap = new Map();  
myMap.set('key', 'value');   
myMap.set(1, 'number'); 
myMap.set(true,  3453453);

for (let name of myMap.keys()) {
    console.log(`Ключ - ${name}, значение - ${myMap.get(name)}`) ;
}


