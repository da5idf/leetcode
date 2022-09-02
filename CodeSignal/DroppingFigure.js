var droppingFigure = function (matrix) {
    let row;
    let moving;
    let curDif;
    let minDif = Infinity;

    for (let col = 0; col < matrix[0].length; col++) {
        row = 1;
        curDif = 0;
        moving = true;
        while (moving && row < matrix.length) {
            if (matrix[row - curDif - 1][col] === "F" && matrix[row][col] === "F") {
                row++;
            }
            else if (matrix[row - curDif - 1][col] === "F" && matrix[row][col] === "#") {
                moving = false;
            } else {
                curDif++;
                if (curDif > minDif) moving = false;
                row++;
            }
        }
        minDif = Math.min(minDif, curDif);
    }

    for (row = matrix.length - minDif - 1; row >= 0; row--) {
        console.log(matrix);
        for (col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === "F") {
                matrix[row + minDif][col] = "F"
                matrix[row][col] = "."
            }
        }
    }
    return matrix
}

let matrix = [
    ["F", "F", "F", "F"],
    [".", "F", ".", "F"],
    [".", "F", ".", "F"],
    [".", ".", ".", "."],
    [".", ".", ".", "."],
    [".", ".", ".", "."],
    [".", ".", "#", "."],
];
// let matrix = [
//     [".", ".", ".", "."],
//     ["F", "F", "F", "F"],
//     ["#", "F", ".", "F"],
//     [".", ".", ".", "."],
//     [".", ".", ".", "."],
//     [".", ".", ".", "."],
//     [".", ".", ".", "."],
// ];

console.log(droppingFigure(matrix));