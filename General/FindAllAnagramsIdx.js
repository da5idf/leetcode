var findAnagrams = function (s, p) {
    const indices = [];
    const pCounts = new Array(26).fill(0);
    const sCounts = new Array(26).fill(0);

    for (let i = 0; i < p.length; i++) {
        pCounts[p.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        sCounts[s.charCodeAt(i) - 97]++;
        if (i >= p.length - 1) {
            if (checkEquality(pCounts, sCounts)) indices.push(i - p.length + 1)
            sCounts[s.charCodeAt(i - p.length + 1) - 97]--
        }
    }

    return indices;
}

var checkEquality = function (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

let s = "cbaebabacd", p = "abc"

console.log(findAnagrams(s, p));