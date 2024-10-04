let cadena = 'esta es una cadena de texto para probar la mayuscula'

let capitalizeFirstLetters = '';

let separar = cadena.split(' ');

for(let i = 0; i < separar.length; i++){
    let separadas = separar[i];
    let mayuscula = separadas.charAt(0).toUpperCase()+ separadas.slice(1).toLowerCase();
    capitalizeFirstLetters += mayuscula+' ';
}

console.log(capitalizeFirstLetters);