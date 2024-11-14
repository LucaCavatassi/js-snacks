// 4.	Verifica palindromi
// Scrivi una funzione èPalindromo che accetta una stringa e restituisce true se la stringa è un palindromo (uguale sia da sinistra a destra che viceversa) e false altrimenti.

function èPalindromo(str) {
    if (str.split("").reverse().join("") === str) {
        return true;
    } else {
        return false;
    }
}
console.log(èPalindromo("anna")); // true
console.log(èPalindromo("ciao")); // false
