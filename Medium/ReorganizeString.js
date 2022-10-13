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

const s = "aabbcc"
console.log(reorganizeString(s));

// while (newString.length < letterCount) {
//     console.log(newString)
//     if (letterCountMap[i][1] > 0) {
//         newString += letterCountMap[i][0]
//         letterCountMap[i][1]--;
//     }
//     if (i !== priorityIdx && letterCountMap[priorityIdx][1] > 0) {
//         i = priorityIdx
//     } else {
//         while (letterCountMap[priorityIdx][1] === 0) {
//             priorityIdx++;
//         }
//         i = priorityIdx + 1;
//     }
// }

// let newStringArr = new Array(letterCount);
// letterCountMap.sort((a, b) => b[1] - a[1]);
// let letter = 0;
// let i = 0;
// let startIdx = 0;
// while (letter < 26) {
//     while (letterCountMap[letter][1] > 0) {
//         newStringArr[i] = letterCountMap[letter][0]
//         letterCountMap[letter][1]--
//         i += maxFrequency
//     }
//     if (i >= letterCount) i = startIdx + 1;
//     letter++
// }