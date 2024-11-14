//3. Trova il valore massimo
// Scrivi una funzione trovaMassimo che accetta un array di numeri e restituisce il valore massimo. Non usare Math.max().

function trovaMassimo(arr) {
    
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}
console.log(trovaMassimo([1, 2, 3, 4, 5])); // 5