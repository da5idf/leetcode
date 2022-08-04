/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    let rottens = [];
    let numFresh = 0;
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 2) rottens.push([r, c]);
            if (grid[r][c] === 1) numFresh++;
        }
    }

    let time = 0;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (rottens.length && numFresh > 0) {

        // add this for loop to keep track of time.
        let len = rottens.length
        // this way we only increment time after all neighbors of current
        // round have been explored.
        for (let i = 0; i < len; i++) {
            let [r, c] = rottens.shift();
            for (let [row, col] of directions) {
                row = row + r;
                col = col + c;

                // check boundry and ignore 2's and 0's
                if (row < 0 || row === ROWS || col < 0 || col === COLS || grid[row][col] !== 1) continue;

                rottens.push([row, col])
                grid[row][col] = 2;
                numFresh--;
            }
        }
        time++;
    }

    return numFresh === 0 ? time : -1
};