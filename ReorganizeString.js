var reorganizeString = function (s) {
    if (s.length === 1) return s;

    const letterCountMap = {};

    for (const char of s) {
        letterCountMap[char] = letterCountMap[char] + 1 || 1
    }

    const sortedLetters = Object.keys(letterCountMap).sort((a, b) => letterCountMap[b] - letterCountMap[a])
    const maxFreq = letterCountMap[sortedLetters[0]];
    if (s.length < 2 * maxFreq - 1) return '';


    let newString = new Array(s.length);
    let insertIdx = 0;
    for (let i = 0; i < sortedLetters.length; i++) {
        const currChar = sortedLetters[i];
        const letterCount = letterCountMap[currChar];
        for (let j = 0; j < letterCount; j++) {
            newString[insertIdx] = currChar;
            insertIdx += 2;
            if (insertIdx > newString.length - 1) insertIdx = 1;
        }
    }
    return newString.join("")
}

/*
var reorganizeString = function (s) {
    const letterCount = s.length;

    if (letterCount === 1) return s;

    const letterCountMap = new Array(26).fill().map(() => [null, 0]);

    let maxFrequency = 0;
    for (const char of s) {
        letterCountMap[char.charCodeAt(0) - 97][0] = char;
        letterCountMap[char.charCodeAt(0) - 97][1]++;
        maxFrequency = Math.max(maxFrequency, letterCountMap[char.charCodeAt(0) - 97][1]);
    }

    let maxFreqCount = 0;
    for (let i = 0; i < 25; i++) {
        if (letterCountMap[i][1] === maxFrequency) maxFreqCount++
    }

    if (maxFreqCount === 1 && letterCount < 2 * maxFrequency - 1) return ""

    let newString = ""
    letterCountMap.sort((a, b) => b[1] - a[1]);
    let priorityIdx = 0;
    let i = 1;
    while (newString.length < letterCount) {
        newString += letterCountMap[priorityIdx][0]
        letterCountMap[priorityIdx][1]--

        if (letterCountMap[priorityIdx][1] === 0) {
            while (priorityIdx < 26 && letterCountMap[priorityIdx][1] === 0) {
                priorityIdx++;
            }
            i = priorityIdx + 1
        } else {
            while (i < 26 && letterCountMap[i][1] === 0) i++
        }

        if (i >= 26) return newString
        if (letterCountMap[i][1] > 0) {
            newString += letterCountMap[i][0]
            letterCountMap[i][1]--
        }
    }
}
*/

const s = "aaabbbcd"
console.log(reorganizeString(s));