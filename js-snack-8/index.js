const str1 = "anna";
const str2 = "nana";

function isAnagram(str1, str2) {
    // Check if the lengths of the strings are the same
    if (str1.length !== str2.length) {
        console.log(false); // Different lengths mean they cannot be anagrams
    }

    // Sort both strings and compare them
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");

    // Return whether the sorted strings are equal
    if (sortedStr1 === sortedStr2) {
        console.log(true);
    };
}

isAnagram(str1, str2); // true
