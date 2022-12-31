const whereIsWaldo = array => {
    let newarray = array.flat();
    newarray = newarray.reduce((acc,i) => {
        if (acc.hasOwnProperty(i)) {
            acc[i] += 1;
        } else {
            acc[i] = 1;
        }
        return acc;
    },{})
    for (let j in array) {
        for (let k in array[j]) {
            if (newarray[array[j][k]] <= 1) {
                return [+j + 1, +k + 1]
            } else {
                continue;
            }
        }
    }
}


console.log(whereIsWaldo([
    ["A", "A", "A"],
    ["A", "A", "A"],
    ["A", "B", "A"]
])) //➞ [3, 2]

console.log(whereIsWaldo([
    ["c", "c", "c", "c"],
    ["c", "c", "c", "d"]
])) // ➞ [2, 4]

console.log(whereIsWaldo([
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["P", "O", "O", "O"],
    ["O", "O", "O", "O"]
])) // ➞ [5, 1]