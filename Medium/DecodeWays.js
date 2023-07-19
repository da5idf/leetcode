/*
And an iterative approach that 'passes' the baton only
when using 2 characters is possible. Otherwise, dp[i] is just
equal to dp[i -1] as s[i] must be used as a single char.
*/
var numDecodings = function (s) {
    const dp = new Array(s.length + 1)
    dp[0] = 1;

    // initialize dp[1] depending on what s[0] is
    dp[1] = s[0] === '0' ? 0 : 1;
    for (let i = 2; i < dp.length; i++) {
        // one digit (only possible if char at s[i - 1] !== '0')
        if (s[i - 1] !== '0') dp[i] = dp[i - 1];

        const double = Number(`${s[i - 2]}${s[i - 1]}`);
        if (double >= 10 && double <= 26) dp[i] += dp[i - 2]

    }

    return dp[s.length]
}

/*
A much cleaner solution with the same logic
*/
var numDecodings = function (s) {
    const memo = new Array(s.length);
    return solve(s, 0);

    function solve(s, i) {
        if (memo[i]) return memo[i];
        if (s[i] === '0') return 0;
        if (i >= s.length - 1) return 1;

        let ans = solve(s, i + 1);
        if (Number(`${s[i]}${s[i + 1]}`) <= 26) {
            ans += solve(s, i + 2);
        }

        memo[i] = ans;
        return ans;
    }
}

/*
My original solution-- recursion with memo
*/
var numDecodings = function (s) {
    if (!validString(s)) return 0;
    return solve(s, 0, 0, new Array(s.length));
};

function validString(S) {
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== '0') continue;
        if (S[i - 1] !== '1' && S[i - 1] !== '2') return false
    }
    return true;
}

function solve(S, i, count, memo) {
    if (i > S.length - 1) return 1;
    if (S[i] === '0') return 0;
    if (memo[i]) return memo[i]

    let takeOne = 0;
    let takeTwo = 0;
    if (S[i] === '1') {
        takeOne = solve(S, i + 1, count, memo);
        if (S[i + 1]) {
            takeTwo = solve(S, i + 2, count, memo);
        }
    } else if (S[i] === '2') {
        takeOne = solve(S, i + 1, count, memo);
        if (S[i + 1] && Number(S[i + 1]) <= 6) {
            takeTwo = solve(S, i + 2, count, memo);
        }
    } else {
        takeOne = solve(S, i + 1, count, memo)
    }

    memo[i] = takeOne + takeTwo
    return memo[i]
}