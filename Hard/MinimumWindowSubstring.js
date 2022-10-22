var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    const requiredLetterCounts = {};
    const requiredLetters = new Set();
    for (const char of t) {
        if (requiredLetterCounts[char]) requiredLetterCounts[char]++
        else {
            requiredLetterCounts[char] = 1;
            requiredLetters.add(char);
        }
    }

    let end = 0;
    let start = 0;
    let optimalStart, optimalEnd;
    let minLength = Infinity
    while (end < s.length) {

        while (requiredLetters.size > 0) {
            const characterAtEnd = s[end];

            requiredLetterCounts[characterAtEnd]--
            if (requiredLetterCounts[characterAtEnd] === 0) requiredLetters.delete(characterAtEnd)
            end++;
        }

        while (requiredLetters.size === 0) {
            const substringLength = end - start; // not plus one becuause of line 25
            if (substringLength === t.length) return s.substring(start, end)
            if (substringLength < minLength) {
                minLength = substringLength;
                optimalStart = start;
                optimalEnd = end
            }

            const characterAtStart = s[start];
            requiredLetterCounts[characterAtStart]++
            if (requiredLetterCounts[characterAtStart] > 0) requiredLetters.add(characterAtStart)
            start++
        }
    }
    return s.substring(optimalStart, optimalEnd);
};

let s = "ab";
let t = "b"