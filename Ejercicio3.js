let cadena = 'Esta es una prueba para aplicar a un trabajo';
let vocales = 'aeiouAEIOU';
let countVowels = '';


for(let i= 0; i < cadena.length; i++){
    if(vocales.includes(cadena[i])){
        countVowels += cadena[i];
    }

}

console.log(countVowels);