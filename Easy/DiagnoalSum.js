var diagonalSum = function (mat) {
    const N = mat.length;
    let sum = 0;
    for (let i = 0, j = N - 1; i < N; i++, j--) {
        sum += mat[i][i];
        if (j !== i) sum += mat[j][i];
    }

    return sum;
};