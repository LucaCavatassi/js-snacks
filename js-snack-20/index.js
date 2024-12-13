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

console.log(validateProducts(products));
