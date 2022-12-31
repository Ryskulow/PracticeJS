const operation = (...args) => {
    return args.reduce((battery, value, index, array) => {
        if (array[index] === array[array.length-1]) return battery;
        if (array[array.length-1] === "add") return (+battery) + (+value);
        else if (array[array.length-1] === "subtract") return (+battery) - (+value);
        else if (array[array.length-1] === "divide") return (+battery) / (+value);
    })
}

console.log(operation("1",  "2", "add")) // ➞ 3

console.log(operation("4",  "5", "subtract")) // ➞ -1

console.log(operation("6",  "3", "divide")) // ➞ 2