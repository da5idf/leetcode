// Optimized Space Iterative approach
var longestCommonSubsequence = function (text1, text2) {
    // ensure text1 (num rows) is shorter
    if (text1.length > text2.length) {
        let temp = text1;
        text1 = text2;
        text2 = temp;
    }

    const ROWS = text1.length
    const COLS = text2.length
    let prev = new Array(ROWS + 1).fill(0);
    let curr = new Array(ROWS + 1).fill(0);

    for (let col = 1; col < COLS + 1; col++) { // position of longer word, text2
        for (let row = 1; row < ROWS + 1; row++) { // position of shorter word, text1
            if (text1[row - 1] === text2[col - 1]) {
                curr[row] = 1 + prev[row - 1]
            }
            else {
                curr[row] = Math.max(prev[row], curr[row - 1]);
            }
        }
        let temp = prev
        prev = curr;
        curr = temp;
    }

    return prev[ROWS]
}


// Iterative approach
var longestCommonSubsequence = function (text1, text2) {
    const LEN1 = text1.length;
    const LEN2 = text2.length;
    const memo = new Array(LEN1 + 1).fill(0).map(() => new Array(LEN2 + 1).fill(0));

    for (let p1 = 1; p1 < LEN1 + 1; p1++) {
        for (let p2 = 1; p2 < LEN2 + 1; p2++) {
            if (text1[p1 - 1] === text2[p2 - 1]) {
                memo[p1][p2] = 1 + memo[p1 - 1][p2 - 1]
            }
            else {
                memo[p1][p2] = Math.max(memo[p1 - 1][p2], memo[p1][p2 - 1]);
            }
        }
    }

    return memo[LEN1][LEN2]
}

/*  Optimized first solution
 *  
 *  Here, the key is that if text1[idx1] = text2[idx2] we obviously
 *  want to take that character. So we only need to recurse on idx1 + 1, idx2 + 1
 * 
 *  In the other case, we take the max of ignoring either idx1 or idx2
 */
var longestCommonSubsequence = function (text1, text2) {
    const LEN1 = text1.length;
    const LEN2 = text2.length;
    const memo = new Array(LEN1).fill().map(() => new Array(LEN2));

    const recurse = (idx1, idx2) => {
        if (idx1 === LEN1 || idx2 === LEN2) return 0;
        if (memo[idx1][idx2]) return memo[idx1][idx2];

        let thisMax = 0
        if (text1[idx1] === text2[idx2]) {
            thisMax = 1 + recurse(idx1 + 1, idx2 + 1)
        }
        else {
            thisMax = Math.max(recurse(idx1, idx2 + 1), recurse(idx1 + 1, idx2));
        }

        memo[idx1][idx2] = thisMax;
        return thisMax
    }

    return recurse(0, 0);
};

// first working solution
var longestCommonSubsequence = function (text1, text2) {
    const LEN1 = text1.length;
    const LEN2 = text2.length;
    const memo = new Array(LEN1).fill().map(() => new Array(LEN2));

    const recurse = (idx1, idx2) => {
        if (idx1 === LEN1 || idx2 === LEN2) return 0;
        if (memo[idx1][idx2]) return memo[idx1][idx2];

        const idx = text2.indexOf(text1[idx1], idx2); // second parameter is the starting idx
        let include = 0;
        if (idx !== -1) {
            include = 1 + recurse(idx1 + 1, idx + 1)
        }
        const exclude = recurse(idx1 + 1, idx2);

        const thisMax = Math.max(include, exclude);
        memo[idx1][idx2] = thisMax;
        return thisMax
    }

    return recurse(0, 0);
};


/** 
// For some reason, this didn't work. Reading online, it looks like maps are slower than
// Arrays. When solving with the array method above, it works
 
var longestCommonSubsequence = function (text1, text2) {
    const memo = new Map();

    const recurse = (text1, text2) => {
        if (text1.length === 0 || text2.length === 0) return 0;
        if (memo.get(text1 + " " + text2)) return memo.get(text1 + " " + text2);
        
        const idx = text2.indexOf(text1[0]);
        let include = 0;
        if (idx !== -1) {
            include = 1 + recurse(text1.slice(1), text2.slice(idx + 1))
        }
        const exclude = recurse(text1.slice(1), text2);
        
        const thisMax = Math.max(include, exclude);
        memo.set(text1 + " " + text2, thisMax);
        return thisMax
    }

    return recurse(text1, text2);   
};
*/