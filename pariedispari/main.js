let parioDispari = prompt("Pari o dispari?");

console.log(parioDispari);

let numInput = parseInt(prompt("Inserisci un numero da 1 a 5"));

let numBot = Math.floor(Math.random() * 5) + 1;

console.log(numInput);
console.log(numBot);

let result = pod(numInput, numBot);

console.log(result);




let winner;
if (parioDispari == "Pari" /* || parioDispari == "pari" */ && result === "pari") {

    let winner = "Pari!, hai vinto";

    console.log(winner);
    document.getElementById("paint").innerHTML = (winner);

} else if (parioDispari == "Pari" /* || parioDispari == "pari" */ && result === "dispari") {

    let winner = "Dispari!, hai perso";

    console.log(winner);
    document.getElementById("paint").innerHTML = (winner);
} else if (parioDispari == "Dispari" /* || parioDispari == "dispari" */  && result === "pari") {

    let winner = "Pari!, hai perso";

    console.log(winner);
    document.getElementById("paint").innerHTML = (winner);
} else if (parioDispari == "Dispari" /* || parioDispari == "dispari" */  && result === "dispari") {

    let winner = "Dispari!, hai vinto";

    console.log(winner);
    document.getElementById("paint").innerHTML = (winner);
} 
else {

    document.getElementById("paint").innerHTML = ("Hai sbagliato a scrivere pari o dispari n'evvero?");
}



/* Funzione */
function pod(num1, num2) {

    numero = num1 + num2;

    let risultato;
    if (numero % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    return risultato;



}