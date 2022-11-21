var nearestExit = function (maze, entrance) {

    var isBorder = function (row, col) {
        if (row === 0 || row === maze.length - 1) return true;
        if (col === 0 || col === maze[0].length - 1) return true;
        return false;
    }

    var inBounds = function (row, col) {
        return (
            row < maze.length &&
            row >= 0 &&
            col < maze[0].length &&
            col >= 0
        )
    }

    let minSteps = 10000;
    const queue = [[entrance[0], entrance[1], 0]];
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length) {
        const [row, col, steps] = queue.shift();
        if (isBorder(row, col) && steps !== 0) return steps;
        maze[row][col] = steps;
        for (const [deltaRow, deltaCol] of dirs) {
            const [newRow, newCol] = [row + deltaRow, col + deltaCol];
            if (inBounds(newRow, newCol) && maze[newRow][newCol] === ".") {
                queue.push([newRow, newCol, steps + 1]);
                maze[newRow][newCol] = steps + 1;
            }
        }
    }

    return minSteps < 10000 ? minSteps : -1;
};