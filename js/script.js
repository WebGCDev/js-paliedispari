//Creo la variabile
let parolaCheck;

//Creo un ciclo do-while
do {
  parolaCheck = prompt(
    'Inserisci la parola che vuoi verificare se sia PALINDROMA!'
  );
} while (!isNaN(parolaCheck));
alert(palindromoCheck(parolaCheck));

//Creo la funzione con tolowerCase & charAt
function palindromoCheck(parola) {
  let parolaInversa = '';
  parola = parola.toLowerCase();
  for (i = parola.length - 1; i >= 0; i--) {
    parolaInversa += parola.charAt(i);
  }
  if (parola == parolaInversa) {
    return 'La parola è PALINDROMA';
  } else {
    return 'La parola non è PALINDROMA';
  }
}
