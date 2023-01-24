var findJudge = function (n, trust) {
    const inTrust = new Array(n).fill(0);
    const outTrust = new Array(n).fill(0);
    for (const [p1, p2] of trust) {
        inTrust[p2 - 1]++;
        outTrust[p1 - 1]++;
    }

    for (let i = 0; i < n; i++) {
        if (inTrust[i] === n - 1 && outTrust[i] === 0) return i + 1
    }

    return -1
};