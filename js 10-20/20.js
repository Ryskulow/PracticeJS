const specialReverse = (str, char) => {
    str = str.split(' ');
    const newStr = [];
    let count = 0;
    for (let i in str) {
        for (let j in str[i]) {
            if (str[i][j] === char) {
                count++;
            }
        } if (count > 0) newStr.push([...str[i]].reverse().join(""));
        else newStr.push(str[i]);
        count = 0;
    }return newStr.join(" ");
}

console.log(specialReverse("word searches are super fun", "s"))
//➞ "word sehcraes are repus fun"

console.log(specialReverse("first man to walk on the moon", "m"))
//➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
//➞ "retep repip dekcip delkcip sreppep"