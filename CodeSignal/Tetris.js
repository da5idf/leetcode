/*
You are given a matrix of integers field of size n × m representing a game field, and also a matrix of integers figure of size 3 × 3 representing a figure. Both matrices contain only 0s and 1s, where 1 means that the cell is occupied, and 0 means that the cell is free.

You choose a position at the top of the game field where you put the figure and then drop it down. The figure falls down until it either reaches the ground (bottom of the field) or lands on an occupied cell, which blocks it from falling further. After the figure has stopped falling, some of the rows in the field may become fully occupied.

Your task is to find the dropping position such that at least one full row is formed. As a dropping position you should consider the column index of the cell in game field which matches the top left corner of the figure 3 × 3 matrix. If there are multiple dropping positions satisfying the condition, feel free to return any of them. If there are no such dropping positions, return -1.

Note: When falling, the 3 × 3 matrix of the figure must be entirely inside the game field, even if the figure matrix is not totally occupied.

For

field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0]
]

figure = [
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 1]
]
the output should be solution(field, figure) = 0.
The figure can be dropped only from position 0. When the figure stops falling, two fully occupied rows are formed, so dropping position 0 satisfies the condition.

example 1

field = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 1, 0, 1]
]

figure = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1]
]
the output should be solution(field, figure) = 2.
The figure can be dropped from three positions - 0, 1, and 2. As you can see below, a fully occupied row will be formed only when dropping from position 2:

example 2

field = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1]
]

figure = [
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0]
]
the output should be solution(field, figure) = -1.

The figure can be dropped from two positions - 0 and 1, and in both cases, a fully occupied line won't be obtained:

example 3
Note that the figure could technically form a full row if it was dropped one position further to the right, but in that case the figure matrix wouldn't be fully contained with the field.

Input / Output

[execution time limit]4 seconds(js)

[input] array.array.integer field

A matrix of integers representing the game field. It's guaranteed that at the beginning there are no fully occupied rows on the game field and that the top three rows are fully free.

Guaranteed constraints:
    4 ≤ field.length ≤ 100,
    3 ≤ field[i].length ≤ 100,
    0 ≤ field[i][j] ≤ 1.

A matrix of integers representing the figure. It's guaranteed that the figure's occupied cells are pairwise connected and there is at least one occupied cell at the bottom row of the figure.

Guaranteed constraints:
    figure.length = 3,
    figure[i].length = 3,
    0 ≤ figure[i][j] ≤ 1.

[output] integer
The dropping position such that a full row is formed. If there are multiple possible positions, return any of them. If there is no such position, return -1.

DAVID'S QUESTION: the prompt does not specify whether the top 3 rows can satisfy the problem. For example, for the following field and figure should the output be 0 or -1? 
    field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0]
]

    figure = [
    [0, 0, 1],
    [0, 0, 1],
    [1, 1, 1]
]
    I sovled the problem for -1. It's easy to modify for the other case.
*/

var checkDropColumn = function (field, figure, dropCol, minDif) {
    // move the figure into place
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (figure[row][col] === 1) {
                field[row + minDif][dropCol + col] = 1
            }
        }
        // ignore the first 3 rows
        if (row + minDif > 2 && field[row + minDif].indexOf(0) === -1) return true;
    }
    return false;
}

var tetris = function (field, figure) {

    const rowCount = field.length;
    const colCount = field[0].length;

    // check if more than 3 0's in any row
    // also track for each col, the highest row with 1
    // i.e. min row such that field[row][col] === 1
    let possible = true;
    let row = 3;
    let highestBlockers = new Array(colCount);
    while (possible && row < rowCount) {
        let emptyCount = 0;
        for (let col = 0; col < colCount; col++) {
            if (field[row][col] === 0) {
                emptyCount === 2 ? possible = false : emptyCount++;
            }
            else if (!highestBlockers[col]) {
                highestBlockers[col] = row;
            }
        }
        row++;
    }
    if (!possible) return -1;

    // now track the lowest 1 in each col of figure
    // i.e. max row such that figure[row][col] === 1
    let lowestOnesInFig = new Array(3);
    for (row = 0; row < 3; row++) {
        for (col = 0; col < 3; col++) {
            if (figure[row][col] === 1) {
                lowestOnesInFig[col] = row;
            }
        }
    }

    // find the minDif given each drop column
    // given minDif, call checkDropColumn to see if complete row is formed
    for (let dropCol = 0; dropCol < colCount - 2; dropCol++) {
        let minDif = Infinity;
        for (let figureCol = 0; figureCol < 3; figureCol++) {
            // out of bounds idices are assigned rowCount and -1 becuase
            // for highestBlocker it's as if at row = rowCount there is a blocker
            // for lowestOne it's as if there were a row above row = 0 containing a 1
            const highestBlocker = highestBlockers[dropCol + figureCol] || rowCount;
            const lowestOne = lowestOnesInFig[figureCol] || -1;

            minDif = Math.min(minDif, highestBlocker - lowestOne - 1)
        }
        // we can ignore when the figure doesn't move
        if (minDif > 0 && checkDropColumn(field, figure, dropCol, minDif)) return dropCol
    }

    return -1
}

let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0]
]


let figure = [
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 1]
]

let field2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 1, 0, 1]
]

let figure2 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1]
]

let field3 = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1]
]

let figure3 = [
    [1, 1, 0],
    [1, 0, 0],
    [1, 0, 0]
]

console.log(tetris(field, figure))      // 0
console.log(tetris(field2, figure2))    // 2
console.log(tetris(field3, figure3))    // -1