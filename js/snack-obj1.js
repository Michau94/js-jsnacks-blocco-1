// SNACK: /
// 1. Creare un oggetto palla che abbia le seguenti proprietà.
//     Nome = palla
// Peso = 10
// 2. stampare la palla in pagina *
//     3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
// della palla., poi stampare la palla con il peso modificato
// BONUS: stampare la palla tramite una funzione



var displayPalla = document.getElementById('display');

var palla = {
    nome: "palla",
    peso: 10
}

//stampa originale
printPalla(palla, displayPalla);


var peso = parseInt(prompt('Modifica peso palla'));

palla.peso = peso;

console.log(palla.peso);
console.table(palla)

//stampa modificato
printPalla(palla, displayPalla);


//funzione per stampa
function printPalla(obj, targetElement) {

    var content = '';

    for (var key in obj) {
        content += '<strong>' + key + '</strong>' + ' : ' + obj[key] + '</br>';

    }

    return targetElement.innerHTML = content;


}




