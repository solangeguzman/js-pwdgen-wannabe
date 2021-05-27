console.log("chiedere la password");

var nome = prompt("scrivi il tuo nome!");
var cognome = prompt("scrivi il tuo cognome!");
var colore = prompt ("scrivi il tuo colore preferito!");

var result= parseInt(nome) + parseInt(cognome) + parseInt(colore) + Number(21);
document.getElementById('visualizza').innerHTML= "La Password è la seguente:" + result;