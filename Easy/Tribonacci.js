// dp solution
var tribonacci = function (n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i < n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[n];
};

// refactored recursionvar tribonacci = function(n) {
var tribonacci = function (n) {

    var getVal = function (n, map = new Map()) {
        if (memo.get(n) !== undefined) return memo.get(n);
        if (n === 0) return 0
        if (n === 1 || n === 2) return 1

        map.set(n, getVal(n - 1) + getVal(n - 2) + getVal(n - 3));

        return map.get(n);
    }

    return getVal(n);
};

// my first solution
var tribonacci = function (n) {
    const calculated = new Map();

    var getVal = function (n) {
        if (n === 0) return 0
        if (n === 1) return 1
        if (n === 2) return 1

        const n1 = calculated.get(n - 1) === undefined ? getVal(n - 1) : calculated.get(n - 1)
        const n2 = calculated.get(n - 2) === undefined ? getVal(n - 2) : calculated.get(n - 2)
        const n3 = calculated.get(n - 3) === undefined ? getVal(n - 3) : calculated.get(n - 3)

        calculated.set(n, n1 + n2 + n3);

        return n1 + n2 + n3;
    }

    return getVal(n);

};