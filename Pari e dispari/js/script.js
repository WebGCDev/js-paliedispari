//Scrivo le variabili
let sceltaUtente = '';
let numeroUtente = 0;
let numeroRandom = 0;

//Genero un primo ciclo do-while in modo tale che la domanda venga posta almeno una volta, aiutandomi con l'operatore logico AND(&&) che mi permette di leggere gli operandi da sinistra a destra e se il risultato è falso si ferma e ritorna il valore originario dell'operando, altrimenti se tutti gli operandi precedenti sono stati valutati e nessuno è falso si ritorna all'ultimo operando
do {
  sceltaUtente = prompt('Scegli "pari" oppure "dispari"?');
} while (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari');

//Genero un secondo ciclo che mi permetta di scegliere un numero da 1 a 5
do {
  numeroUtente = prompt('SCEGLI UN NUMERO DA 1 a 5');
  numeroUtente = parseInt(numeroUtente);
} while (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente));

//Genero un numero randomico da 1 a 5
numeroRandom = randomGenerator1_5();

//Genero una variabile somma
let somma = numeroUtente + numeroRandom;

//Genero una condizione che mi permetta di capire chi ha vinto
if (numeroUtente == isPariOrDispari(somma)) {
  alert('HAI VINTO!');
} else {
  alert('HAI PERSO!');
}

//Genero le due funzioni finali che mi permetteranno di stabilire se la somma dei due numeri è pari o dispari

function randomGenerator1_5() {
  return Math.floor(Math.random() * 5) + 1;
}

function isPariOrDispari(somma) {
  if (somma % 2 == 0) {
    return 'pari';
  } else {
    return 'dispari';
  }
}
