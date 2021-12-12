// ESERCIZIO 3 

//  * Crea un array di numeri interi e fai la somma di tutti gli elementi
//  * che sono in posizione dispari
 
// Creiamo la costante
const numbers = [4, 54, 23, 83, 12, 63, 34];

// Ciclo FOR
let sumOdd = 0;
for(let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i];

    if(i % 2 !== 0) {
        sumOdd += thisNumber;
    }
}
// Usiamo il console per stampare
console.log(sumOdd);