var isSubsequence = function (s, t) {
    let sPointer = 0;
    let tPointer = 0;

    while (tPointer < t.length && sPointer < s.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
            tPointer++
        } else
            tPointer++
    }
    return sPointer === s.length;
};