var uniquePaths = function (m, n) {
    let ROWS = m;
    let COLS = n;
    let uniquePaths = new Array(m).fill().map(() => new Array(n).fill(0));

    for (let row = ROWS - 1; row >= 0; row--) {
        for (let col = COLS - 1; col >= 0; col--) {
            if (row + 1 >= ROWS || col + 1 >= COLS) {
                uniquePaths[row][col] = 1;
            } else {
                let right = uniquePaths[row][col + 1];
                let bottom = uniquePaths[row + 1][col];
                uniquePaths[row][col] = right + bottom;
            }
        }
    }
    return uniquePaths[0][0];
};

/*
This is also a combinatorial problem.
    (n + m - 2) choose (n - 1)
    (n + m - 2) choose (m - 1)
Every path has (n + m - 2) moves to make.
To get to the bottom right we MUST make
    m - 1 "right" moves
    n - 1 "down" moves
So from our (n + m - 2) moves choose (m - 1) or (n - 1)
*/