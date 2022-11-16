var arrayRankTransform = function (arr) {
    const sorted = [...arr].sort((a, b) => a - b)
    const ranks = {};
    let rank = 1;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1]) continue;
        ranks[sorted[i]] = rank++;
    }

    return arr.map(el => ranks[el])
};