const str = "racecar";
const str2 = "hello";


function isPalindrome (str) {
    let reversed = str.split('').reverse().join('');
    
    if (str === reversed) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
isPalindrome(str);
isPalindrome(str2);

