var longestPalindrome = function (s) {
    let letterMap = {};

    for (let i = 0; i < s.length; i++) {
        letterMap[s[i]] ? letterMap[s[i]]++ : letterMap[s[i]] = 1;
    }

    let total = 0;
    oddMax = 0;
    let doubleCounts = -1; // max odd value won't be double counted
    for (let value of Object.values(letterMap)) {
        total += value;
        if (value % 2 === 1) {
            doubleCounts++;
        }
    }

    if (doubleCounts > 0) return total - doubleCounts;
    return total;
};

console.log(longestPalindrome("abccccdd"))