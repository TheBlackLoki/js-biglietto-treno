// dichiarazione delle variabili

var prezzoPerKilometro;
var etaUtente;
var lunghezzaPercorso;
var prezzoBigliettoIniziale;
var sconto;
var prezzoFinale;

// prezzo per kilometro

prezzoPerKilometro = 0.21;

// chiedere all'utente età e lunghezza del viaggio in kilometri

etaUtente = prompt("Quanti anni hai?");
lunghezzaPercorso = prompt("Quanto kilometri devi percorrere in treno?");

// calcolo prezzo iniziale del biglietto

prezzoBigliettoIniziale = prezzoPerKilometro * lunghezzaPercorso;

// calcolo sconto under 18 e over 65

if( etaUtente < 18 ){
  sconto = prezzoBigliettoIniziale / 100 * 20;
}else if ( etaUtente > 65) {
  sconto = prezzoBigliettoIniziale / 100 * 40;
}else {
  sconto = 0;
}

// calcolo prezzo finale del biglietto

prezzoFinale = prezzoBigliettoIniziale - sconto;

// stampa a schermo del prezzo del biglietto

document.getElementById ("biglietto") .innerHTML = "Il prezzo finale del biglietto é " + prezzoFinale.toFixed(2) + "€"
