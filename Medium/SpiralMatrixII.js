var generateMatrix = function (n) {
    let num = 1;
    let matrix = new Array(n).fill().map(() => new Array(n));
    let left = 0;
    let right = n - 1;
    let down = n - 1
    let up = 0;

    while (num <= n ** 2) {
        // move right
        for (let col = left; col <= right; col++) {
            matrix[up][col] = num++;
        }
        up++;

        // move down
        for (let row = up; row <= down; row++) {
            matrix[row][right] = num++;
        }
        right--;

        // move left
        for (let col = right; col >= left; col--) {
            matrix[down][col] = num++;
        }
        down--;

        // move up
        for (let row = down; row >= up; row--) {
            matrix[row][left] = num++;
        }
        left++;
    }

    return matrix
};