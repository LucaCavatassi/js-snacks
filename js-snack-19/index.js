// Write an algorithm (choose the language you prefer) that given a string of characters, 
// for example {'c','a','i','o','p','a'}, will print out the list of characters appearing at least 2 times. 
// In this specific example, it would return {'a'}. 
// Afterwards, comment out the cost in terms of space and time.

const arr = ['c','a','i','o','p','a']

function findDuplicates (array) {
    // var to store results
    const results = [];
    // sort so duplicates are adjacent
    arr.sort()
    // loop trough the array if the two adjacent are equal
    // (since we sorted duplicates are adjacent)
    // and they are not already in the results, push it into results array
    for (let i = 0; i < array.length; i++) {
        if(array[i] === array[i + 1] && !results.includes(array[i])) {
            results.push(array[i]);
        }
    }
    // return results
    return results
}

console.log(findDuplicates(arr))