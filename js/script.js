/** 
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 * 
 * Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 * 
 * Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array
*/

$(document).ready(function(){

    //1
    /* var studente = {
        nome: "Alexandre",
        cognome: "Lemes de Oliveira",
        eta: 29,//virgola finale non necessaria ma salva da future aggiunge e quindi errori
    }

    for( var key in studente){
        console.log( key, studente[key] );
    } */


    //2
    /* var studenti = [
        {
            nome: "Alexandre",
            cognome: "Lemes de Oliveira",
            eta: 29,
        },{
            nome: "Marco",
            cognome: "Rossi",
            eta: 23,
        },{
            nome: "Lucia",
            cognome: "Bianchi",
            eta: 32,
        }
    ]

    for( var i=0; i<studenti.length; i++){
        studente = studenti[i];

        console.log(studente.nome);
        console.log(studente.cognome);
    } */


    //3
    var studenti = [
        {
            nome: "Alexandre",
            cognome: "Lemes de Oliveira",
            eta: 29,
        },{
            nome: "Marco",
            cognome: "Rossi",
            eta: 23,
        },{
            nome: "Lucia",
            cognome: "Bianchi",
            eta: 32,
        }
    ]

    var inputUtente = {
        nome: prompt("Inserire il nome dello studente"),
        cognome: prompt("Inserire il cognnome dello studente"),
        eta: prompt("Inserire l'età dello studente"),
    }

    studenti.push(inputUtente);
    console.log(studenti);


// FINE READY
});