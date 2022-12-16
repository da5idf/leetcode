var minDistance = function (word1, word2) {
    const maxLenSubseq = longestCommonSubsequence(word1, word2);
    return word1.length + word2.length - 2 * maxLenSubseq;
};

var longestCommonSubsequence = function (word1, word2) {
    const ROWS = word1.length;
    const COLS = word2.length;
    const dp = new Array(ROWS + 1).fill().map(() => new Array(COLS + 1).fill(0));

    for (let p1 = 1; p1 < ROWS + 1; p1++) {
        for (let p2 = 1; p2 < COLS + 1; p2++) {
            if (word1[p1 - 1] === word2[p2 - 1])
                dp[p1][p2] = 1 + dp[p1 - 1][p2 - 1];


            else dp[p1][p2] = Math.max(dp[p1 - 1][p2], dp[p1][p2 - 1])
        }
    }

    return dp[ROWS][COLS]
}