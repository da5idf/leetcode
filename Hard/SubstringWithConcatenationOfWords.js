var findSubstring = function (s, words) {
    const numWords = words.length;
    const wordLen = words[0].length;
    const targetLen = numWords * wordLen;

    if (s.length < targetLen) return [];

    const wordCount = {};
    for (const word of words) {
        wordCount[word] = wordCount[word] + 1 || 1;
    }

    let remainingCount = numWords;
    let indices = [];

    for (let start = 0; start < s.length - targetLen + 1; start++) {
        let substrStart = start
        let end = start;

        while (wordCount[s.substring(substrStart, substrStart + wordLen)]) {
            end += wordLen;
            wordCount[s.substring(substrStart, end)]--;
            remainingCount--;
            if (remainingCount === 0) {
                indices.push(start);
            } else {
                substrStart += wordLen;
            }
        };

        // reset counts
        for (let i = start; i + wordLen <= end; i += wordLen) {
            let substr = s.substring(i, i + wordLen)
            wordCount[substr]++;
            remainingCount++;
        }
    }
    return indices;
};