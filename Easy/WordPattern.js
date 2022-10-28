var wordPattern = function (pattern, s) {
    s = s.split(" ");

    if (pattern.length !== s.length) return false;

    const map = {};
    const seen = new Set();
    for (let i = 0; i < s.length; i++) {
        const char = pattern[i];
        const word = s[i];

        if (!map[char] && !seen.has(word)) {
            map[char] = word;
            seen.add(word)
        } else if (map[char] !== word) return false;
    }

    return true;
};