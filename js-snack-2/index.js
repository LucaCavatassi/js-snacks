function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        // Initialize an empty string to hold the result for this iteration
        let output = '';
        
        // If divisible by 3, append 'Fizz'
        if (i % 3 === 0) {
            output += 'Fizz';
        }
        
        // If divisible by 5, append 'Buzz'
        if (i % 5 === 0) {
            output += 'Buzz';
        }
        
        // If neither divisible by 3 nor 5, output the number itself
        if (output === '') {
            output = i;
        }

        // Print the result
        console.log(output);
    }
}

fizzBuzz();