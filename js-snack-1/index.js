const arr = [3, 5, 3, 2, 6, 7, 5];

function uniqueSortedArray(arr) {
    arr.sort();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] !== arr[i + 1]);
        
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i]);
        }
    };

    return result
};
console.log(uniqueSortedArray(arr)); // [2, 3, 5, 6, 7]