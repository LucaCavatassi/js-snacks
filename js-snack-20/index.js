// function removeChar(str) {
//   return str.slice(1, str.length - 1);
// }

// console.log(removeChar("hello")); // Output: "ell"
// console.log(removeChar("a")); // Output: "ell"

// function findFirstNonConsecutive(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1] + 1) {
//       return arr[i]; // Restituisci il primo numero non consecutivo
//     }
//   }
//   return null; // Tutti i numeri sono consecutivi
// }

// console.log(findFirstNonConsecutive([1, 2, 3, 4, 6, 7])); // Output: 6
// console.log(findFirstNonConsecutive([1, 2, 3, 4, 5])); // Output: null

// function accum(str) {
//   let arrStr = str.split("");
//   let result = "";

//   for (let i = 0; i < arrStr.length; i++) {
//     result += arrStr[i].toUpperCase(); // Prima lettera maiuscola
//     result += arrStr[i].toLowerCase().repeat(i); // Ripeti il resto minuscolo
//     if (i < arrStr.length - 1) {
//       result += "-"; // Aggiungi il trattino solo se non è l'ultima iterazione
//     }
//   }

//   return result;
// }
// console.log(accum("abcd")); // Output: "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); // Output: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

// function findOdd(arr) {
//   // Scrivi una funzione che accetti un array di numeri interi e restituisca l’unico numero che appare un numero dispari di volte.
//   let counter = {};
//   // Conta le occorrenze di ogni numero
//   for (let i = 0; i < arr.length; i++) {
//     if (counter[arr[i]]) {
//       counter[arr[i]]++; // Incrementa il conteggio se il numero esiste già
//     } else {
//       counter[arr[i]] = 1; // Inizializza il conteggio a 1
//     }
//   }

//   // Trova il numero con un conteggio dispari
//   for (let num in counter) {
//     if (counter[num] % 2 !== 0) {
//       return parseInt(num); // Restituisci il numero con occorrenze dispari
//     }
//   }

//   return null; // Nessun numero con occorrenze dispari trovato
// }
// console.log(findOdd([7, 3, 7, 3, 7])); // Output: 7
// console.log(findOdd([1, 2, 2, 3, 3, 3])); // Output: 1


// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']

// function solve(a, b) {
//   let result = {};

//   b.forEach(elem => {
//     result[elem] = a.filter(item => item === elem).length;
//   });

//   return result;
// }

// console.log(solve(array1,array2));


// function solve(a, b) {
//   let result = [];

//   for (let i = 0; i < b.length; i++) {
//     let count = 0;
//     for (let j = 0; j < a.length; j++) {
//       if (b[i] === a[j]) {
//         count++;
//       }
//     }
//     result.push(count);
//   }

//   return result;
// }
