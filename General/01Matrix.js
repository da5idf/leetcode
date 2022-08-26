// var updateMatrix = function (mat) {

//     for (let i = 0; i < mat.length; i++) {
//         for (let j = 0; j < mat[i].length; j++) {
//             mat[i][j] = dfs(mat, i, j);
//         }
//     }
//     return mat;
// };

// var dfs = function (mat, row, col) {
//     let queue = [[row, col, 0]];
//     let visited = new Set();

//     while (queue.length) {
//         let current = queue.shift();
//         let [row, col, distance] = current;
//         visited.add(`${row}${col}`);
//         if (mat[row][col] === 0) {
//             return distance
//         }
//         addNeighbors(mat, row, col, queue, distance + 1, visited)
//     }
// }

// var addNeighbors = function (mat, row, col, queue, distance, visited) {
//     if (row - 1 >= 0 && !visited.has(mat[row - 1][col])) {
//         queue.push([row - 1, col, distance])
//     }
//     if (col + 1 < mat[row].length && !visited.has(mat[row][col + 1])) {
//         queue.push([row, col + 1, distance])
//     }
//     if (row + 1 < mat.length && !visited.has(mat[row + 1][col])) {
//         queue.push([row + 1, col, distance])
//     }
//     if (col - 1 >= 0 && !visited.has(mat[row][col])) {
//         queue.push([row, col - 1, distance])
//     }
// }


/**************************************/
// dynamic programmming

var updateMatrix = function (mat) {
    let output = new Array(mat.length)
    for (let i = 0; i < output.length; i++) {
        output[i] = new Array(mat[0].length).fill(Infinity)
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) {
                output[i][j] = 0;
            } else {
                if (i > 0) {
                    output[i][j] = Math.min(output[i][j], output[i - 1][j] + 1)
                }
                if (j > 0) {
                    output[i][j] = Math.min(output[i][j], output[i][j - 1] + 1)
                }
            }
        }
    }

    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[i].length - 1; j >= 0; j--) {
            if (mat[i][j] === 0) {
                output[i][j] = 0;
            } else {
                if (i < mat.length - 1) {
                    output[i][j] = Math.min(output[i][j], output[i + 1][j] + 1)
                }
                if (j < mat[i].length - 1) {
                    output[i][j] = Math.min(output[i][j], output[i][j + 1] + 1)
                }
            }
        }
    }
    return output;
}

let mat = [[1, 1, 1], [0, 0, 0], [0, 1, 0]]

console.log(updateMatrix(mat));