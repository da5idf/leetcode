// Top down DP
var maxUncrossedLines = function (nums1, nums2) {
    const N1 = nums1.length;
    const N2 = nums2.length;

    // here we need an extra row and column to be able to reference a starting 0
    const dp = new Array(N1 + 1).fill().map(() => new Array(N2 + 1).fill(0))

    for (let i = 0; i <= N1; i++) {
        for (let j = 0; j <= N2; j++) {
            if (nums1[i] === nums2[j]) dp[i][j] = 1 + dp[i - 1][j - 1]
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[N1][N2]
}

// refactored solution, which is identical to Longest Common Subsequence
var maxUncrossedLines = function (nums1, nums2) {
    const N1 = nums1.length;
    const N2 = nums2.length;

    const dp = new Array(N1).fill().map(() => new Array(N2).fill(-1))

    function solve(i, j) {
        if (i >= N1 || j >= N2) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        if (nums1[i] === nums2[j]) {
            dp[i][j] = 1 + solve(i + 1, j + 1);
        } else {
            const stay = solve(i, j + 1);
            const move = solve(i + 1, j);
            dp[i][j] = Math.max(stay, move);
        }

        return dp[i][j]
    }

    return solve(0, 0)
};

// my original solution
var maxUncrossedLines = function (nums1, nums2) {
    const N1 = nums1.length;
    const N2 = nums2.length;

    const dp = new Array(N1).fill().map(() => new Array(N2).fill(0))

    function backtrack(i, j) {
        if (i >= N1 || j >= N2) return 0;
        if (dp[i][j] !== 0) return dp[i][j];

        let match = j;
        while (match < N2 && nums2[match] !== nums1[i]) match++;

        const exclude = backtrack(i + 1, j) // don't take the match
        // console.log("exclude", exclude)
        const include = match < N2 ? 1 + backtrack(i + 1, match + 1) : 0;
        // console.log("include", include)

        dp[i][j] = Math.max(exclude, include);
        return dp[i][j]
    }

    backtrack(0, 0)
    // console.log(dp);
    return dp[0][0];
};