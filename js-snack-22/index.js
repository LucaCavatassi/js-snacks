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

// function addItem() {
//     const inputField = document.getElementById('itemInput');
//     const outputList = document.getElementById('list');

//     if (inputField.value.length > 0) {
//         const li = document.createElement('li');
//         li.innerText = inputField.value
//         outputList.appendChild(li);
//         inputField.value = '';
//     } else {
//         alert('type something')
//     }
// }

// document.getElementById('submitBtn').addEventListener('click', addItem);

// // Associa l'evento al pulsante

// function isPrime(n) {
//     let isPrime = true;

//     if (n <= 1) {
//         isPrime = false;
//     } else {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     return isPrime;
// }

// // Test
// console.log(isPrime(7));  // Output previsto: true
// console.log(isPrime(10)); 

// function fizzBuzz() {
//     for (let i = 1; i <= 100;  i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzBuzz')
//         } else if (i % 3 === 0) {
//             console.log('fizz')
//         } else if (i % 5 === 0) {
//             console.log('buzz')
//         } else {
//             console.log(i);
//         }
//     }
// }


// function findMissin(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] + 1 !== arr[i + 1]) {
//             return arr[i] + 1;
//         }
//     }

//     return null; // Se non manca nessun numero
// }
// let arr = [1, 2, 3, 5, 6]
// findMissin(arr);

// function reverseNo(str) {
//     const arr = str.split('')
//     let reverseWord = ''
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reverseWord += arr[i];
//     }
//     return reverseWord;
// }
// let str = 'hello'
// reverseNo(str);


// function checkPalindrom (str) {
//     let formatStr = str.toLowerCase().trim().split(' ').join('');
//     let reverseStr = formatStr.split('').reverse().join('');
    
//     if (formatStr === reverseStr){
//         return console.log(true)
//     } else {
//         return console.log(false)
//     }; 
// }

// let str2 = "A man a plan a canal Panama"

// checkPalindrom(str2);


// // Define a function called 'searchData' that logs a message to the console
// function searchData() {
//     console.log("searchData executed");
// }

// // Create a new debounced version of the 'searchData' function with a delay of 3000 milliseconds (3 seconds)
// const debouncedSearchData = debounce(searchData, 3000);

// // Call the debounced version of 'searchData'
// debouncedSearchData();

// Exercise 1: Change Text Content

// Task: Create a button that changes the text of a <div> with the ID "message" to "Hello, DOM!" when clicked.
// Hint: Use document.getElementById("message").textContent = "Hello, DOM!".

function changeText() {
    return document.getElementById('message').textContent = 'Hello, DOM!';
}

// Exercise 2: Change Styles

// Task: Write a function that changes the background color of a <p> tag with the class "highlight" to "yellow" when clicked.

function changeP(){
    let p = document.querySelectorAll('.highlight') 
    p.forEach(element => {
        element.style.backgroundColor = 'yellow';
    });
}

// Exercise 3: Add a New Element

// Task: Create a button that adds a new <li> element with the text "New Item" to an unordered list with the ID "list".

function addLi() {
    let li = document.createElement('li');
    let list = document.getElementById('list');
    li.innerText = 'New Item'
    list.appendChild(li)
}
// Exercise 4: Remove an Element

// Task: Write a function that removes the first <li> element from a list with the ID "list".
// Hint: Use document.querySelector("li").remove(); or list.removeChild(list.firstChild).
function removeLi() {
    let list = document.getElementById('list');
    list.removeChild(list.firstChild);
}

// Exercise 5: Toggle Class

// Task: Create a button that toggles the "active" class on a <div> with the ID "box".

function toggleClass() {
    let box = document.getElementById('box');
    console.log(box);
    
    if (box.classList.contains('active')) {
        box.classList.remove('active');
    } else {
        box.classList.add('active')
    }
}

// Exercise 6: Change Image Source

// Task: Write a function that changes the source of an <img> tag with the ID "image" to a new URL when a button is clicked.

function changeImg() {
    let img = document.getElementById('image');
    img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2R_yOMZO2KcgMYrNS7WXQ_oiOiUM1e6aa0Q&s');
}

// Exercise 7: Add Event Listener

// Task: Create a button that adds an event listener to a <div> with the class "box", so that when the <div> is clicked, its text content changes to "You clicked me!".
// Hint: Use element.addEventListener("click", function() {...});.

document.getElementById('box').addEventListener('click', function() {
    document.getElementById('box').innerText = 'You clicked me!'
});


// Exercise 8: Create a Dynamic List

// Task: Create a function that dynamically generates a list of 5 items and appends them to a <ul> element with the ID "dynamic-list". Each list item should have the text "Item X".

function generateList() {
    let ul = document.getElementById('dynamic-list')
    for(let i = 1; i <= 5; i++ ) {
        let li = document.createElement('li');
        li.innerText = `Item ${i}`;
        ul.appendChild(li);
    }
}

// Exercise 9: Modify Input Value

// Task: Write a function that changes the value of an <input> element with the ID "username" to "JohnDoe" when a button is clicked.

function modifyValue() {
    document.getElementById('username').value = 'john doe';
}

// Exercise 10: Create and Append a Form

// Task: Write a function that creates a form with a text input, a checkbox, and a submit button. Append this form to the body of the document.

function createForm() {
    let input = document.createElement('input');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'submit'
    
    document.body.appendChild(input);
    document.body.appendChild(checkbox);
    document.body.appendChild(button);

}

// Extra Challenge:

// Task: Create a button that, when clicked, hides or shows a <div> with the class "content" by toggling the display style between "none" and "block".

function showHide() {
    let box = document.getElementById('box') 
    if (box.style.display === 'block') {  // Fix the comparison operator
        box.style.display = 'none';
    } else {
        box.style.display = 'block';
    }
}

document.getElementById('btn').addEventListener('click', showHide);
