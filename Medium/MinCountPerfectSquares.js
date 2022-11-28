


// optimized (dp) enumeration approach
var numSquares = function (n) {
    const squares = [];
    for (let i = 1; i < Math.floor(Math.sqrt(n) + 1); i++) squares.push(i ** 2);

    const minMap = new Map();
    var minNumSquares = function (k) {
        if (squares.indexOf(k) !== -1) return 1;

        let minCount = 10000
        for (const square of squares) {
            if (k < square) break;
            let priorMin = minMap.get(k - square) + 1;
            if (!priorMin) {
                priorMin = minNumSquares(k - square) + 1;
            }
            minCount = Math.min(minCount, priorMin);
            minMap.set(k, minCount)
        }
        return minCount;
    }

    return minNumSquares(n);
};