/*
Chiedi nome, Cognome e Colore preferito, infine scrivi nomecognomecolorepreferito21

1- creiamo le variabili nome, cognome e colore e le chiediamo con un prompt
2- recuperiamo l'elemento html da modificare
3- modifichiamo l'elemento con le 3 variabili ed il 21
*/


var nome = prompt('inserisci il tuo nome')
var cognome = prompt('inserisci il tuo cognome')
var colorePreferito = prompt('inserisci il tuo colore preferito')

var password = document.getElementById('password');
password.innerHTML = nome + cognome + colorePreferito + 21;