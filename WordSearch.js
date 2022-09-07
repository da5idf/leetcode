var exist = function (board, word) {
    console.log()
    let ROWS = board.length;
    let COLS = board[0].length;

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    var findWord = function (row, col, path, letterPointer) {
        if (letterPointer === word.length) return true;

        for (const [deltaRow, deltaCol] of directions) {
            let curRow = row + deltaRow;
            let curCol = col + deltaCol;
            if (curRow < 0 || curRow === ROWS || curCol < 0 || curCol === COLS) continue;
            if (board[curRow][curCol] === word[letterPointer] && !path.has(`${curRow},${curCol}`)) {
                if (findWord(curRow, curCol, new Set(path).add(`${row},${col}`), letterPointer + 1)) {
                    return true;
                }
            }
        }

    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const path = new Set().add(`${row},${col}`)
            if (board[row][col] === word[0] && findWord(row, col, path, 1)) {
                return true;
            }
        }
    }
    return false;
};