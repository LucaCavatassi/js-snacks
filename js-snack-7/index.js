const num = 1111;

function sumOfDigits(num) {
    // Conv number to string and split into array
    let arrStr = num.toString().split('');
    // Declare number array
    let arrNumb = [];
    // For every string push it as number into arrayNumb
    for (let i = 0; i < arrStr.length ; i++) {
        arrNumb.push(parseInt(arrStr[i]));
    }

    // 
    let initial = 0
    let total = arrNumb.reduce((acc, cur) => acc + cur, initial)
    
    console.log(total);
    return total
}

sumOfDigits(num); // 10 (1 + 2 + 3 + 4)