// https://www.youtube.com/watch?v=_nCsPn7_OgI&t=57s

var longestPalindromeSubseq = function (s) {
    const LEN = s.length;
    const dp = new Array(LEN).fill().map(() => new Array(LEN).fill(0));

    for (let start = LEN - 1; start >= 0; start--) {
        dp[start][start] = 1;
        for (let end = start + 1; start < LEN; start++) {
            if (s[start] === s[end]) {
                dp[start][end] = dp[start + 1][end - 1] + 2
            }
            else {
                dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1])
            }
        }
    }

    return dp[0][LEN - 1]
}