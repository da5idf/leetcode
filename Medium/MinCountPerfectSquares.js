/***
 * Much easier to understand dp solution that builds from 0
 * 1. Initialize a dp array where dp[0] = 0 meaning that it 
 *      takes 0 perfect squares to sum to 0.
 * 2. i represents the value we are trying to sum to. Initialize this to
 *      max value to force Math.min
 * 3. Recognize that for an integer y, there exists an x < y s.t. numSquares(y) = numSquares(x) + 1
 *      As a default case, you can take numSquares(y) = numSquares(y - 1) + 1 because 1 is a perfect square.
 *      As another example, for y = 10, x = 6, 
 *          numSquares(y) = numSqaures(10 - 4) + 1 
 *          numSquares(y) = numSqaures(6) + 1
 *          numSquares(y) = 3 + 1 (6 = 4 + 1 + 1)
 *          numSquares(y) = 4
 *      This isn't the optimal solution, but it explains the point.
 * 4. With 3 in mind, the j for loop references back to prior values x 
 *      at each iteration, we check the current value of dp[i] with
 *      dp[i - j * j] = dp[i - 'a perfect square'] + 1 = dp[x] + 1
 * 
 *      The j * j is the key, and clever part of the solution. This ensures the correctness of the + 1.
 *      In other words, becuase j * j is by definition a perfect square, we can get to numSquares(x) from
 *      numSquares(x - 'a perfect square') + 1 where this + 1 refelcts adding 'a perfect square' to the smaller integer
 *            
 */

function numSquares(n) {
    const dp = [0];

    for (let i = 1; i <= n; i++) {
        dp[i] = Number.MAX_VALUE;
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[n];
}

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