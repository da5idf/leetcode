var bestTeamScore = function (scores, ages) {
    const N = scores.length;
    const ageScoreSorted = new Array(N);
    for (let i = 0; i < N; i++) {
        ageScoreSorted[i] = [ages[i], scores[i]];
    }
    ageScoreSorted.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    })

    const dp = new Array(N).fill(0);
    dp[0] = ageScoreSorted[0][1];
    let answer = dp[0];
    for (let i = 1; i < N; i++) {
        const curScore = ageScoreSorted[i][1];
        for (let j = i - 1; j >= 0; j--) {
            const priorScore = ageScoreSorted[j][1];
            if (curScore >= priorScore) dp[i] = Math.max(dp[i], curScore + dp[j]);
            else if (dp[i] < curScore) dp[i] = curScore;
        }
        answer = Math.max(answer, dp[i]);
    }

    return answer;
};