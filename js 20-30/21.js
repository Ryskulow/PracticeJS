const lonelyInteger = arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            } if (arr[i] + arr[j] === 0) {
                count++;
            }
        } if (count === 0) return arr[i];
        count = 0;
    }
}


console.log(lonelyInteger([1, -1, 2, -2, 3])) // ➞ 3
// 3 has no matching negative appearance.

console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])) // ➞ -4
// -4 has no matching positive appearance.

console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])) // ➞ -9