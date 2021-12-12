// ESERCIZIO 2 


//  * Generatore di “nomi cognomi” casuali: prendendo
//  * una lista di nomi e una lista di cognomi,
//  * Gatsby vuole generare una falsa lista di invitati.
 
// Creiamo 2 array 1 di nomi e 1 di cognomi
const names = ['Alberto', 'Michele', 'Vincenzo', 'Federico', 'Andrea', 'Matteo'];
const surnames = ['Rossi', 'Bianchi', 'Verdi', 'Barzagli', 'Piparo', 'Crea'];

// Creiamo un ciclo for

for(let i = 0; i < names.length; i++) {
    // console.log(Math.floor(Math.random()*names.length));
    let thisName = names[Math.floor(Math.random() * names.length)];
    let thisSurname = surnames[Math.floor(Math.random() * surnames.length)];

    console.log(thisName + " " + thisSurname);
}
