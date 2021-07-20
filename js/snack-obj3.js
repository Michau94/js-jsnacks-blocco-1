// SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "name", "city" "points";


//display
var displayTable = document.getElementById('table');


var squadre = [
    {
        name: 'Bau',
        city: 'Barcelona',
        points: 3

    },
    {
        name: 'Miao',
        city: 'Roma',
        points: 2

    },
    {
        name: 'Ciccio',
        city: 'Krakow',
        points: 1

    }
]


var content = "";

for (i = 0; i < squadre.length; i++) {
    var currentSquad = squadre[i];

    content += "<tr>"

    //soluzione con ciclo for in
    // for (var key in squadre[i]) {
    //     console.log(squadre[i][key]);

    //     content += '<td>' + squadre[i][key] + '</td>'

    //     console.log(content);

    // }

    // soluzione manuale
    content += '<td>' + currentSquad.name + '</td>';
    content += '<td>' + currentSquad.city + '</td>';
    content += '<td>' + currentSquad.points + '</td>';


    content += '</tr>'




    displayTable.innerHTML = content;
}
