var reverseVowels = function (s) {
    let start = "";
    let end = "";
    const vowels = "aeiouAEIOU"
    let j = s.length - 1;
    let i = 0;
    while (start.length + end.length < s.length) {
        while (i < j && !vowels.includes(s[i])) {
            start += s[i++];
        }
        while (i < j && !vowels.includes(s[j])) {
            end = s[j--] + end;
        }

        start += s[j--];
        if (i < j) end = s[i++] + end
    }
    return start + end
};