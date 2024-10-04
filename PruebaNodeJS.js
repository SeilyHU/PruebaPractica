let num = [80, 60, 70]

let getAvarege = 0;

console.log(num.length)

let suma = 0;

for(let i = 0; i < num.length; i ++){
    
    suma += num[i];

}

getAvarege = suma/ num.length;
console.log(getAvarege);