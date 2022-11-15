function Rev(parola){
    return parola.split("").reverse().join("");
    
};


let parolaInput = prompt("inserisci una parola");

parolaAlContrario = Rev(parolaInput);

console.log(parolaAlContrario);

if (parolaAlContrario === parolaInput){
    document.getElementById("paint").innerHTML = "La parola è palindroma"
} else {
    document.getElementById("paint").innerHTML = "La parola non è palindroma"
}