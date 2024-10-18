const str = "I love JavaScript";

function reverseWords(str){
    console.log(str.split(' ').reverse().join(' '))
}
 
reverseWords(str); // "JavaScript love I"