// Refactored solution with help from community
var getPermutation = function (n, k) {
    let numbers = [];
    const factorials = { 0: 1 };
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
        factorials[i] = factorials[i - 1] * i;
    }

    let permutation = "";
    let remaining = n
    while (remaining > 0) {
        const factorial = factorials[remaining - 1];
        const swapIdx = Math.ceil(k / factorial) - 1;

        permutation = `${permutation}${numbers[swapIdx]}`;
        numbers.splice(swapIdx, 1);

        while (k > factorial) k -= factorial
        remaining--;
    }

    return permutation;
};

// my original solution-- I solved this one!
var getPermutation = function (n, k) {
    let numbers = [];
    const factorials = new Map();
    factorials.set(0, 1);
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
        const priorFactorial = factorials.get(i - 1);
        factorials.set(i, priorFactorial * i)
    }

    let permutation = "";
    let remaining = n
    while (remaining > 0) {
        const factorial = factorials.get(remaining - 1);
        const key = Math.ceil(k / factorial);

        const nextNum = findNextNum(key);

        permutation = `${permutation}${nextNum}`;
        while (k > factorial) k -= factorial
        remaining--;
    }

    function findNextNum(key) {
        if (key === 0) {
            nextNum = numbers[0];
            numbers = numbers.slice(1);
        } else {
            nextNum = numbers[key - 1]
            numbers = [...numbers.slice(0, key - 1), ...numbers.slice(key)];
        }
        return nextNum;
    }

    return permutation;
};