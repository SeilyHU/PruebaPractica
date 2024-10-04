let matriz = ["Perro", 'Elefante', 'Tigre', 'Hipopotamo', 'Guatemala', 'Colombia'];
let findLongestWord = ''

for(let i = 0; i < matriz.length; i++){
    if(matriz[i].length > findLongestWord.length){
        findLongestWord = matriz[i];
    }
}

console.log(findLongestWord);