/*
hash map O(n^2) time solution
First we create a hash map with key value pairs of 
    key = row identifier
    value = frequency of key
Next we iterate through the cols and generate its identifier
    if the col identifier exists in the row map, it means
    we have rowMap[key] matches. So add that value to pairs.
*/
var equalPairs = function (grid) {
    const N = grid.length;
    const rowMap = {}
    for (let row = 0; row < grid.length; row++) {
        let rowStr = "";
        for (let col = 0; col < grid.length; col++) {
            rowStr += grid[row][col].toString();
            if (col !== N - 1) rowStr += ",";
        }
        rowMap[rowStr] = (rowMap[rowStr] || 0) + 1;
    }

    let pairs = 0;
    for (let col = 0; col < grid.length; col++) {
        let colStr = "";
        for (let row = 0; row < grid.length; row++) {
            colStr += grid[row][col].toString();
            if (row !== N - 1) colStr += ",";
        }
        pairs += (rowMap[colStr] || 0)
    }
    return pairs
}

/* 
My first solution using matrix multiplication
O(n^3) time, which is not great... but it was fun to do it 
in an interesting way. Essentially, if a row and column are equal
then the dot product of that row and col will be equal to the 
sum product of (row • row) and (col • col)
*/
var equalPairs = function (grid) {
    const N = grid.length;
    const multiplied = new Array(N).fill().map(() => new Array(N).fill(0))
    const rowSumSquares = [];
    const colSumSquares = [];

    for (let row = 0; row < grid.length; row++) {
        let rowSumSquare = 0;
        let colSumSquare = 0;
        for (let col = 0; col < grid.length; col++) {
            colSumSquare += grid[col][row] ** 2;
            rowSumSquare += grid[row][col] ** 2;
            for (let j = 0; j < grid.length; j++) {
                multiplied[row][col] += grid[j][col] * grid[row][j];
            }
        }
        colSumSquares.push(colSumSquare);
        rowSumSquares.push(rowSumSquare);
    }

    let pairs = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            const mm = multiplied[row][col];
            const rowSumSquare = rowSumSquares[row];
            const colSumSquare = colSumSquares[col];
            if (mm === rowSumSquare && mm === colSumSquare) pairs++
        }
    }
    return pairs
};