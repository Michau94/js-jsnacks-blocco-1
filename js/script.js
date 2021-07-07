/********************************** Snack 1 ********************************************/

/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.


1 - prompt in for loop di un numero;
2 - variabile d'appoggio per stoccare vari prompt e sommarli;
2a - versione sia for che while.
3 - stampa della somma - console.

*/

//DISPLAY

var resultFor = document.getElementById('resultfor');
var resultWhile = document.getElementById('resultwhile');


//initial
var sum = 0;
var number;


//FOR 

for (i = 1; i <= 5; i++) {
    var number = parseInt(prompt('Inserisci un numero ' + i + '/5'));

    //validation

    if (!isNaN(number)) {
        sum += number;
        console.log('Giro: ', i);
        console.log('Numero inserito: ', number);
    }
}
//output
console.log('Totale: ', sum);
resultFor.innerText = 'Il totale del For :' + sum;


// WHILE 
var sumWhile = 0;
var i = 1;


while (i <= 5) {
    number = parseInt(prompt('Inserisci un numero ' + i + '/5'));

    //validation

    while (isNaN(number)) {
        number = parseInt(prompt('Inserisci un numero ' + i + '/5'));
    }
    sumWhile += number;
    console.log('Giro: ', i);
    console.log('Numero inserito: ', number);
    i++;
}

//output
console.log('Totale: ', sumWhile);
resultWhile.innerText = 'Il totale del While :' + sumWhile;