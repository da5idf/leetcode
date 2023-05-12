var mostPoints = function (questions) {
    const N = questions.length;
    const dp = new Array(N + 1).fill(0);

    for (let i = N - 1; i >= 0; i--) {
        const [points, bp] = questions[i];
        const next = dp[i + bp + 1] || 0;
        const include = next + points;
        dp[i] = Math.max(include, dp[i + 1]);
    }

    return dp[0]
};