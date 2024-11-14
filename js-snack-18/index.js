// 5.	Filtrare valori duplicati
// Scrivi una funzione rimuoviDuplicati che accetta un array e restituisce un nuovo array senza i valori duplicati.

function rimuoviDuplicati(arr) {
    let result = [];
    arr.reduce((prev, curr) => {
        if (prev !== curr) {
            result.push(prev)
        }
        return curr
    })

    if (arr.length > 0) {
        result.push(arr[arr.length - 1]);
    }
    
    return result
}
console.log(rimuoviDuplicati([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]