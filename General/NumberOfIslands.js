var numIslands = function (grid) {
    const visited = new Set();
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let row = i;
            let col = j;
            if (grid[row][col] === "1" && !visited.has(`${row},${col}`)) {
                longestPath([row, col], grid, visited);
                count++;
            }
        }
    }
    return count;
}

var longestPath = function (start, grid, visited) {
    let stack = [start];

    while (stack.length) {
        let current = stack.pop();
        if (!visited.has(`${current[0]},${current[1]}`)) {
            visited.add(`${current[0]},${current[1]}`)
            getNeighbors(current, grid, stack);
        }
    }
}

var getNeighbors = function (current, grid, stack) {

    const [i, j] = current;

    if (inBounds(i, j + 1, grid) && grid[i][j + 1] === "1") {
        stack.push([i, j + 1]);
    }
    if (inBounds(i + 1, j, grid) && grid[i + 1][j] === "1") {
        stack.push([i + 1, j]);
    }
    if (inBounds(i, j - 1, grid) && grid[i][j - 1] === "1") {
        stack.push([i, j - 1]);
    }
    if (inBounds(i - 1, j, grid) && grid[i - 1][j] === "1") {
        stack.push([i - 1, j]);
    }
}

var inBounds = function (row, col, grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;

    if (row < 0 || col < 0 || row > rowCount - 1 || col > colCount - 1) return false;

    return true;
}

grid1 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(grid1))