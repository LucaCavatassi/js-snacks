function removeDuplicates(arr) {
    let result = [];
    arr.reduce((prev, curr) => {
        if (prev !== curr) {
            result.push(prev);
        }
        return curr; // Return the current value for the next iteration
    });
    // Push the last element if it is not already in the result
    if (result[result.length - 1] !== arr[arr.length - 1]) {
        result.push(arr[arr.length - 1]);
    }
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]