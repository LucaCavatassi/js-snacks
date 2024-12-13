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