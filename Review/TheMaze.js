var hasPath = function (maze, start, destination) {
    let visited = new Array(maze.length).fill().map(() => new Array(maze[0].length));
    return dfs(maze, start, destination, visited);
};

var dfs = function (maze, start, destination, visited) {
    let [curRow, curCol] = start;
    if (curRow === destination[0] && curCol === destination[1]) return true
    if (visited[curRow][curCol]) return false;
    visited[curRow][curCol] = true;

    //test down
    let down = curRow + 1
    while (down < maze.length && maze[down][curCol] === 0) {
        down++;
    }
    if (dfs(maze, [down - 1, curCol], destination, visited)) return true;

    //test left
    let left = curCol - 1
    while (left >= 0 && maze[curRow][left] === 0) {
        left--;
    }
    if (dfs(maze, [curRow, left + 1], destination, visited)) return true;

    //test up
    let up = curRow - 1;
    while (up >= 0 && maze[up][curCol] === 0) {
        up--;
    }
    if (dfs(maze, [up + 1, curCol], destination, visited)) return true;

    //test right
    let right = curCol + 1;
    while (right < maze[0].length && maze[curRow][right] === 0) {
        right++;
    }
    if (dfs(maze, [curRow, right - 1], destination, visited)) return true;

    return false;
}

let maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], start = [0, 4], destination = [4, 4]
console.log(hasPath(maze, start, destination))