var longestPalindrome = function (s) {
    let max = "";

    for (let i = 1; i < s.length; i++) {
        let distance = 1;
        let inRange = true;
        let curPal = s[i];
        while (inRange && s[i - distance] === s[i + distance]) {
            curPal = `${s[i - distance]}${curPal}${s[i + distance]}`
            distance++;
            inRange = (i - distance >= 0) && (i + distance < s.length)
        }
        if (curPal.length > max.length) max = curPal
    }

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            let left = 1;
            let right = 2;
            let curPal = `${s[i]}${s[i + 1]}`;
            let inRange = true;
            while (inRange && s[i - left] === s[i + right]) {
                curPal = `${s[i - left]}${curPal}${s[i + right]}`
                left++;
                right++;
                inRange = (i - left >= 0) && (i + right < s.length);
            }
            if (curPal.length > max.length) max = curPal
        }
    }
    return max;
};