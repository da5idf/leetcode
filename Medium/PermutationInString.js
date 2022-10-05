var checkInclusion = function (s1, s2) {
    const LEN1 = s1.length;
    const LEN2 = s2.length;
    if (LEN1 > LEN2) return false

    const s1Map = new Array(26).fill(0);
    for (let i = 0; i < LEN1; i++) {
        s1Map[s1.charCodeAt(i) - 97]++
    }

    let remaining = LEN1, start = 0;
    for (let end = 0; end < LEN2; end++) {
        const EndCharCode = s2.charCodeAt(end) - 97;
        if (s1Map[EndCharCode] > 0) remaining--;

        s1Map[EndCharCode]-- // it's OK to bring letters into negative

        if (end - start === LEN1) {
            const StartCharCode = s2.charCodeAt(start) - 97;
            s1Map[StartCharCode]++
            if (s1Map[StartCharCode] > 0) remaining++
            start++
        }

        if (remaining === 0) return true;
    }
    return false;
}

// var checkMatch = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) return false;
//     }
//     return true;
// }

/*
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    
    let neededChar = {}; 
    for (let i = 0; i < s1.length; i++) {
        neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
    }
    
    let left = 0, //left pointer/index of the sliding window
        right = 0, //right pointer/index of the sliding window
        requiredLength = s1.length //length of the substring required in s2

    while (right < s2.length) {
        if (neededChar[s2[right]] > 0) requiredLength--;
        
        neededChar[s2[right]]--;
        right++ 

        if (requiredLength === 0) return true;

        if (right - left === s1.length) {
            if (neededChar[s2[left]] >= 0) requiredLength++;
            neededChar[s2[left]]++;
            left++
        }
    }
    return false;
};
*/