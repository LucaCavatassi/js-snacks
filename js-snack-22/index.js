//Scrivi una funzione in JavaScript che, dato un array di stringhe, crei una lista <ul> e la aggiunga al body. Ogni elemento dell’array deve diventare un <li> nella lista.

function createList(items) {
    // Creiamo un nuovo elemento <ul>
    const ul = document.createElement("ul");

    // Iteriamo sull'array ricevuto
    items.forEach(item => {
      const li = document.createElement("li"); // Creiamo un <li>
      li.textContent = item; // Impostiamo il testo
      ul.appendChild(li); // Aggiungiamo il <li> alla <ul>
    });

    // Aggiungiamo la <ul> al body della pagina
    document.body.appendChild(ul);
}

createList(["Elemento 1", "Elemento 2", "Elemento 3"]);