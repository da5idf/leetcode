var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let counts = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 97]++
        counts[t.charCodeAt(i) - 97]--
    }

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] !== 0) return false
    }

    return true;
};

const s = "anagram", t = "nagarad"

console.log(isAnagram(s, t))