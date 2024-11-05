function sumArray(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        result += arr[i]
    }
    return result
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // 15