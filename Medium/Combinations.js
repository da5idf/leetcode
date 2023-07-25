/*
An optimiztion made by comparing the size of combo
with the number of remaining options against k, the number we need
*/
var combine = function (n, k) {
    return addCombinations(n, k, 1, [], []);
};

function addCombinations(n, k, start, combo, combinations) {
    if (combo.length === k) {
        combinations.push(combo.slice());
        return;
    }

    const need = k - combo.length;
    const remaining = n - start + 1;
    const limit = start + remaining - need;

    for (let i = start; i <= limit; i++) {
        combo.push(i);
        addCombinations(n, k, i + 1, combo, combinations);
        combo.pop();
    }

    return combinations;
}

/*
A simple backtracking algorithm.
*/
var combine = function (n, k) {
    return addCombinations(n, k, 1, [], []);
};

function addCombinations(n, k, start, combo, combinations) {
    if (combo.length === k) {
        combinations.push(combo.slice());
        return;
    }

    for (let i = start; i <= n; i++) {
        combo.push(i);
        addCombinations(n, k, i + 1, combo, combinations);
        combo.pop();
    }

    return combinations;
}