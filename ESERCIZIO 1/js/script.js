// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

// Creiamo la  costante
const userNumber = parseInt( prompt('Inserisci il numero') );

// Creiamo una if dove verifichiamo se il numero è pari e lo stampiamo
if(userNumber % 2 === 0) {
    console.log(userNumber);
} else {
    console.log(userNumber + 1);
}