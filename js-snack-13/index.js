// Ricerca Binaria:
// Implementa una funzione che esegua la ricerca binaria su un array ordinato di numeri. 
// La funzione dovrebbe restituire l’indice dell’elemento cercato, oppure -1 se l’elemento non è presente.

const array = [1 ,2 ,3 ,4 ,5, 6, 7, 8];

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)

        //0 <= 7 ? yes --> mid = 3 --> 4 < 3 ? No --> 
        //0 <= 2 ? yes --> mid = 1 --> 2 < 3 ? Yes -->
        //2 <= 2 ? yes --> mid = 2 --> 3 < 3 ? No --> 3 > 3 ? No --> 3 == 3 ? Yes --> "Element found" --> return middle (index of element) 
        if (arr[middle] < target) {
            start = middle + 1
        } else if (arr[middle] > target) {
            end = middle - 1
        } else if (arr[middle] === target) {
            console.log('Element found')
            return middle
        }
    }
    console.log('eleement not found');
    return -1
}

binarySearch(array, 3)
binarySearch(array, 9)
