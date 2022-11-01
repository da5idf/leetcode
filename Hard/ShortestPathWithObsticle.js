var shortestPath = function (grid, k) {
    let visited = {};
    let queue = [[0, 0, k, 0]]//curx,cury,eliminateT,step
    let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    while (queue.length) {
        let [curx, cury, eleminateT, step] = queue.shift()
        if (eleminateT === -1) continue
        if (visited[`${curx}${cury}`]) {
            const [elimCount, stepCount] = visited[`${curx}${cury}`];
            if (elimCount >= eleminateT && step >= stepCount) continue;
        }
        if (curx === grid.length - 1 && cury === grid[0].length - 1) return step

        visited[`${curx}${cury}`] = [eleminateT, step]

        for (let [dx, dy] of dirs) {
            let nextX = curx + dx
            let nextY = cury + dy
            if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length) continue
            if (grid[nextX][nextY] === 0) queue.push([nextX, nextY, eleminateT, step + 1])
            else queue.push([nextX, nextY, eleminateT - 1, step + 1])
        }
    }
    return -1
};

var shortestPath = function (grid, k) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const queue = [[0, 0, k, 0]];
    const seen = {};

    while (queue.length) {
        let [row, col, bombs, numSteps] = queue.shift();

        if (row < 0 || row === ROWS || col === COLS || col < 0) continue;
        if (seen[`${row},${col}`]) {
            const [bombCount, stepCount] = seen[`${row},${col}`];
            if (bombCount >= bombs && numSteps >= stepCount) continue;
        }

        if (row === ROWS - 1 && col === COLS - 1) return numSteps;
        seen[`${row},${col}`] = [bombs, numSteps]

        if (grid[row][col] === 1) {
            if (bombs === 0) continue;
            else bombs--;
        }

        queue.push([row, col + 1, bombs, numSteps + 1])
        queue.push([row + 1, col, bombs, numSteps + 1])
        queue.push([row - 1, col, bombs, numSteps + 1])
        queue.push([row, col - 1, bombs, numSteps + 1])

    }
    return -1
};