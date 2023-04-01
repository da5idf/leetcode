var solveSudoku = function (board) {
    const n = board.length;
    dfs(board, n);
}

function dfs(board, n) {
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] !== ".") continue;

            for (let i = 1; i <= 9; i++) {
                let c = i.toString();
                if (isValid(board, row, col, n, c)) {
                    board[row][col] = c;
                    if (dfs(board, n)) return true;
                }
            }
            board[row][col] = "."
            return false;
        }
    }
    return true;
}

function isValid(board, row, col, n, c) {
    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < n; i++) {
        if (board[row][i] === c || board[i][col] === c) return false;
        const curRow = blockRow + Math.floor(i / 3);
        const curCol = blockCol + Math.floor(i % 3);
        if (board[curRow][curCol] === c) return false;
    }
    return true;
}