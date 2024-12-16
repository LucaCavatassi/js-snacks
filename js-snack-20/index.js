function removeChar(str) {
    return str.slice(1, str.length - 1);
}

console.log(removeChar("hello")); // Output: "ell"
console.log(removeChar("a")); // Output: "ell"


function findFirstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i]; // Restituisci il primo numero non consecutivo
        }
    }
    return null; // Tutti i numeri sono consecutivi
}

console.log(findFirstNonConsecutive([1, 2, 3, 4, 6, 7])); // Output: 6
console.log(findFirstNonConsecutive([1, 2, 3, 4, 5]));    // Output: null


function accum(str) {
    let arrStr = str.split('');
    let result = '';

    for (let i = 0; i < arrStr.length; i++) {
        result += arrStr[i].toUpperCase(); // Prima lettera maiuscola
        result += arrStr[i].toLowerCase().repeat(i); // Ripeti il resto minuscolo
        if (i < arrStr.length - 1) {
            result += '-'; // Aggiungi il trattino solo se non è l'ultima iterazione
        }
    }

    return result;
}
console.log(accum("abcd"));    // Output: "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // Output: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"