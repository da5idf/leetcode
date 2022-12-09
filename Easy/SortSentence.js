var sortSentence = function (s) {
    s = s.split(" ");
    const ans = new Array(s.length);
    for (const word of s) {
        const idx = word[word.length - 1] - 1;
        ans[idx] = word.slice(0, word.length - 1);
    }
    return ans.join(" ");
};