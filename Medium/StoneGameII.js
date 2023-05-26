/*
The dp is defined at 
    at player's turn p
    at pile i
    with an M value of m

res is initialized to big/small depending on who's turn it is
s keeps track of the sum of piles a player can take.
    we can iterate from x = 1 (take 1 pile) to Min(2 * m, N - i)
        2 * m comes from the definition of the problem.
        N - i describes that we have N piles, but we are at the i'th pile
            so there only remains N - i piles. 
            For instance, if we are at i = 8 and m = 4 but N = 10, 
            we can ony to go 10 - 8 = 2 so that we cover the 9th and 10th pile

If it's Alice's turn then we want the result to be the MAX of
    the current res and s + f(1, i + x, Math.max(x, m))
    In other words, she takes s stones and then the game state becomes
        p = 0 because now it's Bob's turn
        i + x because after taking x piles we are at idx i + x
        Math.max(x, m) because of the problem definition of m.
If it's Bob's turn then the same logic holds except p = 1.

At each function call, we check if we visited that game state already.
*/

var stoneGameII = function (piles) {
    const dp = new Array(2);
    const N = piles.length;
    for (let i = 0; i < 2; i++) {
        dp[i] = new Array(N + 1);
        for (let j = 0; j < N + 1; j++) {
            dp[i][j] = new Array(N + 1).fill(-1);
        }
    }

    function f(p, i, m) {
        if (i === N) return 0;

        if (dp[p][i][m] !== -1) return dp[p][i][m]

        let res = p === 1 ? 1000000 : -1
        let s = 0;
        for (let x = 1; x <= Math.min(2 * m, N - i); x++) {
            s += piles[i + x - 1];
            if (p === 0) {
                res = Math.max(res, s + f(1, i + x, Math.max(x, m)))
            }
            else res = Math.min(res, f(0, i + x, Math.max(x, m)))
        }
        dp[p][i][m] = res;
        return res;
    }

    return f(0, 0, 1);
};