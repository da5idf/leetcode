var kthSmallest = function (matrix, k) {
    if (k === 1) return matrix[0][0];

    const ROWS = matrix.length;
    const COLS = ROWS;
    let row = ROWS - 1;

    if (ROWS === 1) return matrix[k - 1];
    if (COLS === 1) return matrix[k - 1][0];

    let currentPos = (ROWS - 1) * COLS + 1;

    while (currentPos !== k) {
        if (currentPos < k) {
            return matrix[row][k - currentPos]
        } else {
            currentPos -= COLS;
            row--
        }
    }
}