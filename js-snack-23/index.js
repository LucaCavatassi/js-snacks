// const gridPosition = (name, position) => {
//   const rows = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9],
//         [10,11,12],
//         [13,14,15],
//         [16,17,18],
//         [19,20,21]
//     ];

//     let rowIndex = rows.findIndex(row => row.includes(position));

//     if (rowIndex === -1) {
//         console.log("Position not available.");
//         return;
//     }

//     let colIndex = rows[rowIndex].indexOf(position);
    
//     let firstWord = '' 
//     let secondWord = '';
//     let result = ''

//     if (colIndex === 0 && rowIndex === 0) {
//         firstWord = 'pole position'
//     } else if (colIndex === 0) {
//         firstWord = 'top'
//     } else if (colIndex === 1) {
//         firstWord = 'middle'
//     } else if (colIndex === 2) {
//         firstWord = 'bottom'
//     }

//     if (rowIndex === 0) {
//         secondWord = 'front'
//     } else if (rowIndex + 1 === 2) {
//         secondWord = '2nd'
//     } else if (rowIndex + 1 === 3) {
//         secondWord = '3rd'
//     } else if (rowIndex + 1 > 3) {
//         secondWord = `${rowIndex + 1}th`
//     }

//     if (firstWord === 'pole position') {
//         result = `${name} starts from ${firstWord}`
//     } else {
//         result = `${name} starts from the ${firstWord} of the ${secondWord} row`
//     }

//     return result
// }

// function nbYear(p0, percent, aug, p) {
//     let result = 0;
//     do {
//         let yearIncrement = Math.floor(((p0 / 100) * percent) + aug);
//         p0 += yearIncrement
//         result++
//     } while (p0 < p);    

//     console.log(result);
    
//     return result;
// }

// nbYear(1000, 2.0, 50, 1214)


function findGlasses(arr) {
    return arr.findIndex(word => /O-+O/.test(word));
}
