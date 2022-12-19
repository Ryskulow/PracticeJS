function getStudentsWithNamesAndTopNotes(arr) {
    for (let i in arr) {
        let maxValue = 0;
        for (let j in arr[i].notes) {
            if (arr[i].notes[j] > maxValue) {
                maxValue = arr[i].notes[j];
            }
        }console.log(maxValue);
    }
}



getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
])
