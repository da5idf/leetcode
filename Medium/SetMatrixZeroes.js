// solution with O(1) space
var setZeroes = function (matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    let zeroFirstCol = false;

    for (let row = 0; row < ROWS; row++) {

        if (matrix[row][0] === 0) zeroFirstCol = true;

        for (let col = 1; col < COLS; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }

    for (let row = 1; row < ROWS; row++) {
        for (let col = 1; col < COLS; col++) {
            if (matrix[0][col] === 0 || matrix[row][0] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if (matrix[0].length && matrix[0][0] === 0) {
        for (let col = 1; col < COLS; col++) {
            matrix[0][col] = 0;
        }
    }

    if (zeroFirstCol) {
        for (let row = 0; row < ROWS; row++) {
            matrix[row][0] = 0;
        }
    }
}

/* my solution with extra space
var setZeroes = function (matrix) {

    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    const rowsToZero = new Array(ROWS).fill(false);
    const colsToZero = new Array(COLS).fill(false);

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (matrix[row][col] === 0) {
                rowsToZero[row] = true;
                colsToZero[col] = true;
            }
        }
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (rowsToZero[row] || colsToZero[col]) {
                matrix[row][col] = 0;
            }
        }
    }
    return matrix
};
*/