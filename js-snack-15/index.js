// 2.	Somma dei numeri dispari
// Scrivi una funzione sommaDispari che accetta un array di numeri e restituisce la somma di tutti i numeri dispari.

function sommaDispari(arr) {
    let result = 0;
    arr.forEach(elem => {
        if (elem % 2 != 0) {
            result += elem;
        }
    });

    return result
}
console.log(sommaDispari([1, 2, 3, 4, 5])); // 9