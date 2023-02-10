// BFS solution
var maxDistance = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const queue = [];
    const visited = new Set();

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 1) {
                queue.push([row, col])
                visited.add(`${row},${col}`)
            }
        }
    }

    const addToQueue = (row, col) => {
        if (row < 0 || col < 0) return;
        if (row === ROWS || col === COLS) return;

        if (!visited.has(`${row},${col}`)) {
            visited.add(`${row},${col}`)
            queue.push([row, col])
        }
    }

    let maxDist = -1;
    while (queue.length) {
        maxDist++;
        const LEN = queue.length;
        for (let i = 0; i < LEN; i++) {
            const [row, col] = queue.shift();
            addToQueue(row - 1, col)
            addToQueue(row + 1, col)
            addToQueue(row, col - 1)
            addToQueue(row, col + 1)
        }
    }

    return maxDist === 0 ? -1 : maxDist
}


// My DP solution
var maxDistance = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    let maxDist = -1;

    const findLand = (row, col) => {
        if (row < 0 || row === ROWS) return 201;
        if (col < 0 || col === COLS) return 201;

        if (grid[row][col] === 0) return 201;

        return grid[row][col] + 1
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 0) {
                const up = findLand(row - 1, col)
                const left = findLand(row, col - 1)

                grid[row][col] = Math.min(up, left);
            };
        }
    }

    for (let row = ROWS - 1; row >= 0; row--) {
        for (let col = COLS - 1; col >= 0; col--) {
            if (grid[row][col] !== 1) {
                const down = findLand(row + 1, col)
                const right = findLand(row, col + 1)

                grid[row][col] = Math.min(grid[row][col], down, right);
                if (grid[row][col] < 201) maxDist = Math.max(maxDist, grid[row][col] - 1)
            };
        }
    }

    return maxDist
};