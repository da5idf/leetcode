var reverseWords = function (s) {
    let words = [];
    let start = 0;
    let end = 0;
    while (start < s.length) {
        while (s[start] === " ") start++;
        end = start + 1;
        while (s[end] && s[end] !== " ") end++;
        if (s[start]) words.push(s.slice(start, end))
        start = end + 1;
    }
    return words.reverse().join(" ")
}