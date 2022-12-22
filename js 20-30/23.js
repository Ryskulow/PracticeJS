function intersectionUnion(arr1, arr2)  {
    let intersection = [];
    let union = new Set(arr2.concat(arr1).sort())
    let count = 0;
    for (let i in arr1) {
        for (let j in arr2) {
            if (arr1[i] === arr2[j]) count++;
        }
        if (count > 0) intersection.push(arr1[i]);
    }
    let set = new Set(intersection);
    return [[...set], [...union]]
}

console.log(intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9])) // ➞ [[4], [1, 2, 3, 4, 5, 9]]
console.log(intersectionUnion([1, 2, 3], [4, 5, 6])) //➞ [[], [1, 2, 3, 4, 5, 6]]
console.log(intersectionUnion([1, 1], [1, 1, 1, 1])) //➞ [[1], [1]]