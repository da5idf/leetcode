/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let [rottens, oranges] = traverse(grid);

    rottens.forEach(rotten => {
        dfs(rotten, grid, oranges);
    })

    let distances = Object.values(oranges);
    distances.sort((a, b) => a - b);

    if (!distances.length) return 0;
    if (distances[0] === -1) return -1
    return distances[distances.length - 1];
};

var traverse = function (grid) {
    let rottens = [];
    let oranges = {};
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                rottens.push([i, j]);
                oranges[`${i}${j}`] = 0;
            }
            if (grid[i][j] === 1) oranges[`${i}${j}`] = -1;
        }
    }
    return [rottens, oranges]
}

var dfs = function (start, grid, oranges) {
    let visited = new Set();
    let queue = [[start, 0]];

    while (queue.length) {
        let [current, depth] = queue.shift();
        visited.add(`${current[0]}${current[1]}`);

        addNeighbors(current, depth, queue, visited, grid, oranges);
    }
}

var addNeighbors = function ([row, col], depth, queue, visited, grid, oranges) {
    if (row > 0 && grid[row - 1][col] === 1 && !visited.has(`${row - 1}${col}`)) {
        queue.push([[row - 1, col], depth + 1])
        if (oranges[`${row - 1}${col}`] === -1) {
            oranges[`${row - 1}${col}`] = depth + 1
        } else {
            oranges[`${row - 1}${col}`] = Math.min(depth + 1, oranges[`${row - 1}${col}`])
        }
    }

    if (col < grid[0].length && grid[row][col + 1] === 1 && !visited.has(`${row}${col + 1}`)) {
        queue.push([[row, col + 1], depth + 1])
        if (oranges[`${row}${col + 1}`] === -1) {
            oranges[`${row}${col + 1}`] = depth + 1;
        } else {
            oranges[`${row}${col + 1}`] = Math.min(depth + 1, oranges[`${row}${col + 1}`])
        }
    }

    if (row < grid.length - 1 && grid[row + 1][col] === 1 && !visited.has(`${row + 1}${col}`)) {
        queue.push([[row + 1, col], depth + 1])
        if (oranges[`${row + 1}${col}`] === -1) {
            oranges[`${row + 1}${col}`] = depth + 1
        } else {
            oranges[`${row + 1}${col}`] = Math.min(depth + 1, oranges[`${row + 1}${col}`])

        }
    }

    if (col > 0 && grid[row][col - 1] === 1 && !visited.has(`${row}${col - 1}`)) {
        queue.push([[row, col - 1], depth + 1])
        if (oranges[`${row}${col - 1}`] === -1) {
            oranges[`${row}${col - 1}`] = depth + 1
        } else {
            oranges[`${row}${col - 1}`] = Math.min(depth + 1, oranges[`${row}${col - 1}`])

        }
    }
}