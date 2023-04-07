var closedIsland = function (grid) {
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 0) {
                if (dfs(row, col)) count++
                // if (grid[row][col]) {console.log(row, col); count++}
            }
        }
    }
    return count;

    function dfs(row, col) {
        if (row === grid.length || row < 0) return false;
        if (col === grid[0].length || col < 0) return false;
        if (grid[row][col] === false) return false;
        if (grid[row][col] === 1) return true;

        grid[row][col] = 1;

        if (dfs(row + 1, col) &&
            dfs(row - 1, col) &&
            dfs(row, col - 1) &&
            dfs(row, col + 1)
        ) return true;
    }
}