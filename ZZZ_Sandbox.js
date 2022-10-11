var rotate = function (matrix) {
    const ROWS = matrix.length;
    const COLS = ROWS;

    for (let row = 0; row < Math.floor(ROWS / 2); row++) {
        for (let col = row; col < COLS - 1 - row; col++) {
            let prev = matrix[row][col];
            let currentRow = row;
            let currentCol = col;
            for (let i = 0; i < 4; i++) {
                let temp = matrix[currentCol][COLS - 1 - currentRow];
                matrix[currentCol][COLS - 1 - currentRow] = prev;
                prev = temp;
                [currentRow, currentCol] = [currentCol, COLS - 1 - currentRow];
            }
        }
    }
    return matrix;
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate(matrix))
