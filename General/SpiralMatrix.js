// from ChatGPT
// A little verbose, but easier to read IMO
var spiralOrder = function (matrix) {
    let result = [];
    if (matrix.length === 0) {
        return result;
    }

    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Traverse right
        for (let i = colBegin; i <= colEnd; i++) {
            result.push(matrix[rowBegin][i]);
        }
        rowBegin++;

        // Traverse down
        for (let i = rowBegin; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
        }
        colEnd--;

        // Traverse left
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                result.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;

        // Traverse up
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                result.push(matrix[i][colBegin]);
            }
        }
        colBegin++;
    }

    return result;
}

/*
var spiralOrder = function (matrix) {

    let ROWS = matrix.length;
    let COLS = matrix[0].length;
    let spiralOrder = [];

    let i = 0;
    let j = 0;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let direction = 0;
    let visited = new Set();
    while (spiralOrder.length < ROWS * COLS) {
        spiralOrder.push(matrix[i][j]);
        visited.add(`${i}${j}`)
        for (let dir = 0; dir < directions.length; dir++) {
            let move = (direction + dir) % 4;
            let [deltaRow, deltaCol] = directions[move];
            let inBounds = i + deltaRow < ROWS && i + deltaRow >= 0 && j + deltaCol < COLS && j + deltaCol >= 0
            if (inBounds && !visited.has(`${i + deltaRow}${j + deltaCol}`)) {
                i += deltaRow;
                j += deltaCol;
                direction = move;
                break;
            }
        }
    }
    return spiralOrder;
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix));
*/