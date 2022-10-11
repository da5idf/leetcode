var searchMatrix = function (matrix, target) {
    let row = matrix.length;
    let col = 0

    while (row >= 0 && col < matrix[0].length) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            row--;
        } else {
            col++;
        }
    }

    return false;
}