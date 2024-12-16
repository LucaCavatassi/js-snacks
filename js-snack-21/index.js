const products = [
  { id: 1, name: "Smartphone", price: 699 },
  { id: 2, name: "Laptop" }, // Manca il campo "price"
  { id: 3, price: 299 }, // Manca il campo "name"
];

function validateProducts(products) {
    products.forEach((product) => {
        if (!product.id || !product.name || !product.price) {
            console.log(`Errore: Il prodotto con ID ${product.id || "sconosciuto"} è incompleto.`);
        }
    });
}

validateProducts(products);

// Scrivi una funzione che accetti una stringa e restituisca un oggetto che conta quante volte ogni parola appare nella stringa.
const text = "hello world hello everyone";

function wordCounter(str) {
    const wordsArr = str.split(' '); // Dividi la stringa in parole
    const response = {}; // Usa un oggetto per mantenere il conteggio delle parole

    for (let i = 0; i < wordsArr.length; i++) {
        const word = wordsArr[i];
        if (response[word]) {
            response[word]++; // Incrementa il conteggio se la parola esiste già
        } else {
            response[word] = 1; // Altrimenti inizializza a 1
        }
    }

    return response;
}

console.log(wordCounter(text));

// Filtra numeri pari 

const numbers = [1, 2, 3, 4, 5, 6];

function oddFilter(arr) {
    const response = arr.filter((number) =>
        number % 2 === 0
    )
    return response
}
console.log(oddFilter(numbers));

// 4. Trova il Primo Elemento Duplicato

// Scrivi una funzione che accetti un array e restituisca il primo elemento duplicato che incontra. Se non ci sono duplicati, restituisci null.
const array = [2, 5, 3, 5, 7, 3];

function findFirstDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]; // Restituisci il primo duplicato trovato
            }
        }
    }
    return null; // Nessun duplicato trovato
}

console.log(findFirstDuplicate(array));

// Funzione fattoriale

const n = 5;

function factor(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i
    }
    console.log(result);
    return result
}

factor(n)