console.log("Ristorante totale Cena");

var prezzo = prompt('prezzo');
var sconto = prompt("sconto del");
var mancia = prompt ("mancia");

var result = parseInt("prezzo") * PerseInt("sconto") / 100 + PerseInt("mancia");
var totale = parseInt("prezzo") + ("mancia") - sconto;
document.getElementById("prezzoScontato").innerHTML = prezzo + sconto + mancia;