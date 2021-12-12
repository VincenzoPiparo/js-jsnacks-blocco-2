// ESERCIZIO 4

//  * Crea un array vuoto e chiedi all’utente un numero
//  * da inserire nell’array. Continua a chiedere i numeri
//  * all’utente e a inserirli nell’array fino a quando
//  * a somma degli elementi è minore di 50.
 
// Creazione array vuoto
let numbers = [];

let numberSum = 0;
// Creazione ciclo while
while (numberSum < 50) {
    let userNumber = parseInt( prompt('Inserisci un numero') );

    numberSum+=userNumber;
    numbers.push(userNumber);
    console.log(numbers);
}
// Stampa in console log il programma finito
console.log(`Il programma è terminato perche ${numberSum} è maggiore o uguale a 50`);
console.log(`L'array di elementi contiene al suo interno: ${numbers}`);
