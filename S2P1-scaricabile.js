//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let numeroMag = 9
let numeroMin = 5

console.log('Il primo numero è il piu grande:', numeroMag > numeroMin)*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let num = 19

if (num < 5){
  console.log('Tiny');
}else if( num < 10){
  console.log('Small');
}else if(num < 15){
  console.log('Medium');
}else if(num < 20){
  console.log('Large');
}else{
  console.log('Huge');
}*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/


/* SCRIVI QUI LA TUA RISPOSTA 

for (let i = 0; i < 11; i ++ ){
  if(i === 3 || i === 8){
    continue;
  }
  console.log(i);
}*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.

for( let i = 0; i < 16; i ++){
  if(i % 2 === 0){
    console.log('il numero è pari',i);
  }else{
    console.log('il numero è dispari',i)
  }

}*/

/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.


let numeroA = 8
let numeroB = 16

if (numeroA === 8 || numeroB === 8 || numeroA + numeroB === 8 || numeroA - numeroB === 8 || numeroB - numeroA) {
          console.log('le condizioni sono sodisfatte');
}else{
  console.log('le condizioni NON sono sodisfatte')
}*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let totalShoppingCart = 55
const costoSpedizione = 10
let totalPiuSpedizione = totalShoppingCart + costoSpedizione


if (totalShoppingCart > 50){
  console.log('hai diritto alla spedizione gratuita!')
} else {
  console.log('il totale piu il costo di spedizione è:', totalPiuSpedizione)
}*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.


let totalShoppingCart = 155
let costoSpedizione = 10

let totalBlackFriday = totalShoppingCart * 80/100

let totalPiuSpedizione = totalBlackFriday + costoSpedizione

if (totalBlackFriday > 50){
  console.log('Hai diritto alla spedizione gratuita:',totalBlackFriday)
}else{
     console.log('il totale piu il costo di spedizione è:', totalPiuSpedizione)
}*/


/* SCRIVI QUI LA TUA RISPOSTA 

let carello = [
  { id: 1 , nome: 'borsa', prezzo: 150},
  { id: 2, nome: 'scarpe', prezzo: 50}
]
let costoSpedizione = 10
let totalShoppingCart = carello[0].prezzo + carello[1].prezzo

let totalBlackFriday = totalShoppingCart * 80/100;

console.log(totalBlackFriday)
if (totalBlackFriday > 50){
  console.log('hai diritto alla spedizione gratuita!')
} else{
  console.log(`il totale piu il costo di spedizione è:, ${ totalBlackFriday + costoSpedizione}`)
} */



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"

let gender

const isMale = true

gender = isMale ? 'Male' : 'female'

console.log(gender)
*/




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".


for( let step = 1; step <= 100; step++)
{
  if( step % 3 === 0 && step % 5 === 0){
    console.log('fizzbuzz', step)
  }
  else if(step % 3 === 0){
    console.log('fizz', step)
  } else if(step % 5 === 0){  
    console.log('buzz', step)
  }else{
    console.log(step)
  }

  
}*/


// Carrello e sconti particolari




