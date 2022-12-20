/***
 * Each coefficient is a binomial coefficient.
 * for row 8
 *      [1,       8,     28,    56,   70,    56,    28,     8,     1]
 *      [(8c0), (8c1), (8c2), (8c3), (8c4), (8c5), (8c6), (8c7), (8c8)]
 * For loop:
 *  i = 1, factorialBuilder = 8
 *      row[1] = row[i - 1] * factorialBuilder / i
 *      row[1] = (8c0) * 8 / 1
 *      row[1] = 1 * 8 / 1
 *      row[1] = 8 = (8c1) / 1
 *  i = 2, factorialBuilder = 7
 *      row[1] = row[i - 1] * factorialBuilder / i
 *      row[1] = [(8c1) / 1] * 7 / 2
 *      row[1] = 8 * 7 / 2
 *      row[1] = 28 = (8c2)
 *  i = 3, factorialBuilder = 6
 *      row[1] = row[i - 1] * factorialBuilder / i
 *      row[1] = (8c2) * 6 / 3
 *      row[1] = (8 * 7 / 2) * 6 / 3
 *      row[1] = (8 * 7 * 6) / (3 * 2)
 *      row[1] = 56 = (8c3)
 */
var getRow = function (rowIdx) {
    var row = new Array(rowIdx + 1)
    row[0] = row[rowIdx] = 1
    let factorialBuilder = rowIdx
    for (i = 1, factorialBuilder; i < factorialBuilder; i++, factorialBuilder--)
        row[i] = row[factorialBuilder - 1] = row[i - 1] * factorialBuilder / i
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