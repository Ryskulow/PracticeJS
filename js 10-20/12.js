const split = string => {
    let vowels = "";
    let consonats = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' ||
            string[i] === 'e' ||
            string[i] === 'y' ||
            string[i] === 'u' ||
            string[i] === 'i' ||
            string[i] === 'o') {
            vowels = vowels + string[i]
        } else {
            consonats = consonats + string[i]
        }
    }
    return vowels + consonats
}


split("abcde") //➞ "aebcd"

split("Hello!") //➞ "eoHll!"

split("What's the time?") //➞ "aeieWht's th tm?"

