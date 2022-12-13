var minFallingPathSum = function (matrix) {
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            const topLeft = matrix[row - 1][col - 1] || 10001
            const top = matrix[row - 1][col];
            const topRight = matrix[row - 1][col + 1] || 10001;
            if (row === 2 && col === 0) console.log(topLeft, top, topRight)
            matrix[row][col] = matrix[row][col] + Math.min(topLeft, top, topRight);
        }
    }
    return Math.min(...matrix[matrix.length - 1])
};