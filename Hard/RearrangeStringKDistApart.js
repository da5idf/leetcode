var rearrangeString = function (s, k) {
    if (s.length === 1) return s;

    const letterCountMap = {};

    for (const char of s) {
        letterCountMap[char] = letterCountMap[char] + 1 || 1
    }

    const sortedLetters = Object.keys(letterCountMap).sort((a, b) => letterCountMap[b] - letterCountMap[a])
    const maxFreq = letterCountMap[sortedLetters[0]];
    if (s.length < k * maxFreq - 1) return '';


    let newString = new Array(s.length);
    let offset = 0;
    for (let i = 0; i < sortedLetters.length; i++) {
        if (offset < k) {
            const currChar = sortedLetters[i];
            const letterCount = letterCountMap[currChar];
            for (let j = 0, insertIdx = offset; j < letterCount; j++, insertIdx += k) {
                newString[insertIdx] = currChar;
            }
            offset++
        }
        else if (offset === k) {
            offset *= offset * k + 1
            newString[offset] = sortedLetters[i]
        } else {
            offset++
            newString[offset] = sortedLetters[i]
        }
    }
    return newString.join("")
}

const s = "aabbccd"
const k = 3
console.log(rearrangeString(s, k));