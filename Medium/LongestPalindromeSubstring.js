// A 2D dynamic programming approach
// Personally, I like the next solution better. 
var longestPalindrome = function (s) {
    const LEN = s.length;
    const dp = new Array(LEN).fill().map(() => new Array(LEN).fill(false));
    let left = 0;
    let right = 0;

    for (let start = 0; start < LEN; start++) {
        // if palindrome length = 1 then true by default
        dp[start][start] = true;

        // if palindrome is of length 2, s[start] === s[start + 1]
        if (s[start] === s[start + 1]) {
            dp[start][start + 1] = true;
            left = start;
            right = start + 1;
        }
    }

    // you have to work backwards with start idx 
    for (let start = LEN - 1; start >= 0; start++) {
        for (let end = start + 2; end < LEN; end++) {
            // shrink start, end by 1
            let nextSmallestPalindrome = dp[start + 1][end - 1];
            dp[start][end] = nextSmallestPalindrome && s[start] === s[end]

            if (dp[start][end] && (end - start) > (right - left)) {
                left = start;
                right = end;
            }
        }
    }
    return s.slice(left, right + 1)
}

/*** A little improvement over the first solution below
 *      This uses a helper function to expand over even
 *      and odd length palindromes.
 * 

var longestPalindrome = function (s) {
    let start = 0;
    let end = 0;
    let currMax = 0;
    for (let i = 0; i < s.length; i++) {
        const oddLengthMax = expandAroundCenter(i, i, s);
        const evenLengthMax = expandAroundCenter(i, i + 1, s);

        currMax = Math.max(oddLengthMax, evenLengthMax);

        if (currMax > (end - start)) {
            start = i - Math.floor((currMax - 1) / 2);
            end = i + Math.floor(currMax / 2);
        }
    }

    return s.slice(start, end + 1);
}

var expandAroundCenter = function (left, right, s) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1
}
 */


/* Not a very clear solution, but it works.
 * 
 * In the first for loop, we check around a center of length 1
 *  for example: bab has 'a' as a center of length 1.
 * In the second for loop, we check around a center of length > 1
 *  for example baab has 'aa' as a center of length 2.
 * The first for loop does not catch case 2.

var longestPalindrome = function(s) {
    let max = s[0];

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
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            let left = 1;
            let right = 2;
            let curPal = `${s[i]}${s[i + 1]}`;
            inRange = (i - left >= 0) && (i + right < s.length); 
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
*/