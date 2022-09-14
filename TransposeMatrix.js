var transpose = function (matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    const transposed = [];

    for (let col = 0; col < COLS; col++) {
        const transposeRow = []
        for (let row = 0; row < ROWS; row++) {
            transposeRow.push(matrix[row][col])
        }
        transposed.push(transposeRow.reverse());
    }
    return transposed
}

let matrix;
// matrix = [[true, true, true, true]];
matrix = [[false, true, true], [true, true, false]]
matrix = transpose(matrix);
console.log(matrix);
matrix = transpose(matrix);
console.log(matrix);