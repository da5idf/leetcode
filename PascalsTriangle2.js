// combinatorial method
var getRow = function (rowIndex) {
    let row = []

    for (let i = 0; i <= rowIndex + 1; i++) {
    }
}

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