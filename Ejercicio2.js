    let reverseWords = '!Hola mundo¡';
    let nuevaPalabra = '';

    for(let i = reverseWords.length - 1; i >= 0; i--){
        nuevaPalabra += reverseWords[i];
    }

    console.log(nuevaPalabra);