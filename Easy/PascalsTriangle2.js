// combinatorial method
var getRow = function (rowIdx) {
    var row = new Array(rowIdx + 1)
    row[0] = row[rowIdx] = 1
    for (i = 1, up = rowIdx; i < rowIdx; i++, up--)
        row[i] = row[i - 1] * up / i
    return row
};

/* original solution
var getRow = function (rowIndex) {
    const pascal = [];

    for (let i = 0; i <= rowIndex; i++) {
        pascal[i] = [1];
        for (let j = 1; j <= i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal[rowIndex]
};
*/

console.log(getRow(6))