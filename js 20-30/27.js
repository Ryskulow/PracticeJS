const concat = (...args) => {
    let newArray = [];
    for (let i in args) {
        newArray.push(...args[i])
    }
    return newArray;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7])) // ➞ [1, 2, 3, 4, 5, 6, 7]

console.log(concat([1], [2], [3], [4], [5], [6], [7])) // ➞ [1, 2, 3, 4, 5, 6, 7]

console.log(concat([1, 2], [3, 4])) // ➞ [1, 2, 3, 4]

console.log(concat([4, 4, 4, 4, 4])) // ➞ [4, 4, 4, 4, 4]