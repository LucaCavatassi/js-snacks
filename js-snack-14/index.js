// 1.	Invertire una stringa
// Scrivi una funzione invertiStringa che accetta una stringa come input e restituisce la stringa invertita.

function invertiStringa(str) {
    return str.split('').reverse().join('');
}
console.log(invertiStringa("ciao")); // "oaic"