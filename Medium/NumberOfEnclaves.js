var numEnclaves = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (row * col * (row + 1 - ROWS) * (col + 1 - COLS) === 0) {
                if (grid[row][col] === 1) fill(row, col)
            }
        }
    }

    let count = 0;
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 1) count++
        }
    }

    return count;

    function fill(row, col) {
        if (row < 0 || col < 0 || row >= ROWS || col >= COLS || grid[row][col] == 0) return;
        grid[row][col] = 0;
        fill(row - 1, col);
        fill(row + 1, col);
        fill(row, col - 1);
        fill(row, col + 1);
        return;
    }
};