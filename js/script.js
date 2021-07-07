/********************************** Snack 1 ********************************************/

/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.


1 - prompt in for loop di un numero;
2 - variabile d'appoggio per stoccare vari prompt e sommarli;
2a - versione sia for che while.
3 - stampa della somma - console.
*/

console.log('------------------------------Snack 1----------------------------');
//DISPLAY

var resultFor = document.getElementById('resultfor');
var resultWhile = document.getElementById('resultwhile');


//initial
var sum = 0;
var number;


//FOR 

for (i = 1; i <= 5; i++) {
    var number = parseInt(prompt('Inserisci un numero ' + i + '/5', '1'));

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
    number = parseInt(prompt('Inserisci un numero ' + i + '/5', '2'));

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






/********************************** Snack 2 ********************************************/


/* SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.

1- richiesta numero all'utente via prompt e store in var (ovvio).
2 - ciclo if che stabilisce se numero pari o dispari (%2===0 pari).
2a- else che aggiunge +1 al numero digitato.
3- stampa in console */


console.log('------------------------------Snack 2----------------------------');
alert('Snack 2');

var oddEven = document.getElementById('paridispari');

var userNumber = parseInt(prompt('Inserisci un numero', '10'));

//validation
while (isNaN(userNumber)) {
    userNumber = parseInt(prompt('Inserisci un numero', '10'));
}

// condizioni
if (userNumber % 2 === 0) {
    console.log('Numero pari :', userNumber);
    oddEven.innerText = 'Numero pari :' + userNumber;
} else {
    console.log('Numero dispari +1: ', userNumber + 1);
    oddEven.innerText = 'Numero dispari +1: ' + (userNumber + 1);
}




/*SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

1- creazione array con nomi e uno con cognomi.
2 - creazione array sul quale pushare nomi fake.
3 - creare generatore random sfruttando math random come indice degli elementi.
4 - assicurarsi di pushare sull'array solo elementi diversi da qualli già presenti in modo da evitare doppioni.
*/

//display

console.log('------------------------------Snack 3----------------------------');

var fakeDisplay = document.getElementById('fake');

//Arrays
var names = ['Marco', 'Michau', 'Magda', 'Pawel'];
var lastnames = ['Wadowski', 'Vader', 'Skywalker', 'Miao'];
var fake = [];

var i = 0;
while (fake.length < 3) {
    // Fake name gen

    //fake name
    var randomName = Math.floor(Math.random() * names.length);
    // console.log(randomName);
    var fakeName = names[randomName];
    console.log('Random name: ', fakeName);

    // fake lastname

    var randomLastname = Math.floor(Math.random() * lastnames.length);
    // console.log('Random name:', randomLastname);

    var fakeLastname = lastnames[randomLastname];
    console.log('Random lastname: ', fakeLastname);

    // fake name + lastname push only if not already present in array
    var fakePerson = fakeName + ' ' + fakeLastname;
    console.log('Random person: ', fakePerson);

    if (!fake.includes(fakePerson)) {
        fake.push(fakePerson);
    }
}

console.log(fake);

var fakeListDisplay = '';

for (var i = 0; i < fake.length; i++) {
    fakeListDisplay += '<li>' + fake[i] + '</li>';
}


// output

fakeDisplay.innerHTML = fakeListDisplay;



/*SNACK 4: Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
    fino a quando ne avrà tanti quanti l’altro. 

1 - creare due array contenenti numero di elementi diversi. (length diversa).
2 - ciclo if per confrontare lugghezza dei due array e pushare oggetto random finchè lenghth non uguale.
    
*/


var displayArray1 = document.getElementById('array1');
var displayArray2 = document.getElementById('array2');

console.log('------------------------------Snack 4----------------------------');

var array1 = ['miao', 'bau', 'frr', 'elicottero'];
var array2 = ['elicottero'];

var i = 0;

//execute till arrays are different
while (array1.length != array2.length) {
    if (array1.length > array2.length) {
        array2.push(Math.floor(Math.random() * 10));
    } else {
        array1.push(Math.floor(Math.random() * 10));
    }
}

//arrays are the same length
console.log(array1);
console.log(array2);

//output 

displayArray1.innerText = array1.join(' , ');
displayArray2.innerText = array2.join(' , ');









