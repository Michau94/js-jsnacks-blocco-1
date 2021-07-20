// SNACK: Invece di modificare il peso con un prompt, proviamo a farlo con un input.Avremo bisogno di un bottone...


var displayPalla = document.getElementById('display');
var playBTN = document.getElementById('play');


var palla = {
    nome: "palla",
    peso: 10
}
// stampa originale
printPalla(palla, displayPalla);

playBTN.addEventListener('click', function () {

    var inputPeso = document.getElementById('number');
    var inputValue = parseInt(inputPeso.value);

    console.log(inputValue);
    palla.peso = parseInt(inputValue);


    //stampa aggiornamento
    printPalla(palla, displayPalla);

})



//funzione per stampa
function printPalla(obj, targetElement) {

    var content = '';

    for (var key in obj) {
        content += '<strong>' + key + '</strong>' + ' : ' + obj[key] + '</br>';

    }

    return targetElement.innerHTML = content;


}
