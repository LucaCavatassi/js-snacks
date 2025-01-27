//Scrivi una funzione in JavaScript che, dato un array di stringhe, crei una lista <ul> e la aggiunga al body. Ogni elemento dell’array deve diventare un <li> nella lista.

// function createList(items) {
//     // Creiamo un nuovo elemento <ul>
//     const ul = document.createElement("ul");

//     // Iteriamo sull'array ricevuto
//     items.forEach(item => {
//       const li = document.createElement("li"); // Creiamo un <li>
//       li.textContent = item; // Impostiamo il testo
//       ul.appendChild(li); // Aggiungiamo il <li> alla <ul>
//     });

//     // Aggiungiamo la <ul> al body della pagina
//     document.body.appendChild(ul);
// }

// createList(["Elemento 1", "Elemento 2", "Elemento 3"]);



// function getRandomColor() {
//     return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// const btn = document.getElementById("changeColor");
// btn.addEventListener("click", function() {
//     document.body.style.backgroundColor = getRandomColor();
// });
  // Aggiungi l'event listener per cambiare colore allo sfondo

// const user = {
//     name: "Luca",
//     age: 30,
//     city: "Milano"
// };

// function formatData(user) {
//     return `${user.name} ha ${user.age} anni e vive a ${user.city}.`
// }

// function printInput() {
//     const inputField = document.getElementById('userInput');
//     const outputParagraph = document.getElementById('output');

//     if (inputField && outputParagraph) {
//         outputParagraph.textContent = inputField.value.trim(); // Rimuove spazi bianchi extra
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const btn = document.getElementById('submitBtn');
//     if (btn) {
//         btn.addEventListener('click', printInput);
//     }
// });

// async function fetchPost() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();

//     const h2 = document.createElement('h2')
//     h2.textContent = posts[0].title
//     document.body.appendChild(h2);
    
//     // Mostra il titolo del primo post in una <h2>
// }
// fetchPost()

// function sumArray(arr) {
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         counter += arr[i];
//     }
//     return counter
// }

// // Test
// console.log(sumArray([1, 2, 3, 4, 5])); // Output previsto: 15

// function countVowels(str) {
//     const arr = str.split('');
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
//             counter += 1
//         };
//     }
//     return counter
// }

// // Test
// console.log(countVowels("javascript")); // Output previsto: 3

// function reverseString(str) {
//    return str.split('').reverse().join('')
// }

// // Test
// console.log(reverseString("hello")); // Output previsto: "olleh"

function addItem() {
    const inputField = document.getElementById('itemInput');
    const outputList = document.getElementById('list');

    if (inputField.value.length > 0) {
        const li = document.createElement('li');
        li.innerText = inputField.value
        outputList.appendChild(li);
        inputField.value = '';
    } else {
        alert('type something')
    }
}

document.getElementById('submitBtn').addEventListener('click', addItem);

// Associa l'evento al pulsante