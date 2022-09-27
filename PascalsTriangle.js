var generate = function (numRows) {
    let rows = [[1], [1, 1]]
    if (numRows === 1) return [[1]]
    else if (numRows === 2) return rows

    for (let i = 3; i <= numRows; i++) {
        const newRow = new Array(i);
        newRow[0] = 1;
        newRow[i - 1] = 1;
        for (let j = 1; j < i - 1; j++) {
            newRow[j] = rows[i - 2][j - 1] + rows[i - 2][j]
        }
        rows.push(newRow);
    }
    return rows;
}

console.log(generate(5))