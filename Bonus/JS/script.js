console.log("Ristorante totale Cena");

var prezzo = prompt('prezzo');
var sconto = prompt("sconto del");
var mancia = prompt ("mancia");

var result = parseInt("prezzo") * PerseInt("sconto del") / 100 + PerseInt("mancia");

document.getElementById("prezzoScontato").innerHTML = prezzo + sconto + mancia;