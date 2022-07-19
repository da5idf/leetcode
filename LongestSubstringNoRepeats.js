var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let subString = [];

    for (let i = 0; i < s.length; i++) {
        if (subString.indexOf(s[i]) !== -1) {
            max = Math.max(max, subString.length);
            subString = subString.slice(subString.indexOf(s[i]) + 1);
        }

        subString.push(s[i]);
    }

    return Math.max(max, subString.length);;
}