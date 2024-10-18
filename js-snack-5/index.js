function mostFrequentCharacter(str) {
    const frequencyMap = {};

    // Count occurrences of each character
    for (let char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    console.log(frequencyMap); // To see how it looks after counting

    let maxCount = 0;
    let mostFrequent = '';

    // Find the most frequent character
    for (let char in frequencyMap) {
        if (frequencyMap[char] > maxCount) {
            maxCount = frequencyMap[char];
            mostFrequent = char;
        }
    }

    return mostFrequent;
}

// Test it
console.log(mostFrequentCharacter("aab")); // Output: "a"

// Example usage
const str = "javascript";
console.log(mostFrequentCharacter(str)); // "a"