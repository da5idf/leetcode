// histogram approach
var maximalRectangle = function (matrix) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;
    const histogram = new Array(COLS).fill(0)
    let max = 0;

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            histogram[col] = matrix[row][col] === "1" ? histogram[col] + 1 : 0;
        }
        max = Math.max(max, largestRectangle(histogram));
    }

    function largestRectangle(arr) {
        const stack = [];
        arr.push(0); // artificially end the heights
        let maxArea = 0;
        for (let rightBorder = 0; rightBorder < arr.length; rightBorder++) {
            let newLeft = rightBorder;

            while (stack.length && stack[stack.length - 1][1] > arr[rightBorder]) {
                const [leftBorder, height] = stack.pop();
                maxArea = Math.max(maxArea, (rightBorder - leftBorder) * height);
                newLeft = leftBorder;
            }

            stack.push([newLeft, arr[rightBorder]]);
        }

        return maxArea;
    }

    return max;
}


// This solves most of the test questions but fails on matrices
// like this:
//      1 1 1
//      1 1 1
//      1 1 0
// the problem is that in the way I've built my dp, when we reach cell 0,0
// the algorithm thinks it can make a 3x3 square instead of just 2x3.
var maximalRectangle = function (matrix) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;

    for (let row = 0; row < ROWS; row++) {
        matrix[row].push([0, 0])
    }
    matrix.push([]);
    for (let col = 0; col <= COLS; col++) {
        matrix[ROWS][col] = [0, 0];
    }

    // console.log(matrix);
    let max = 0;
    for (let row = ROWS - 1; row >= 0; row--) {
        for (let col = COLS - 1; col >= 0; col--) {
            console.log([row, col], matrix[row][col])
            if (matrix[row][col] === "1") {
                const [Rright, Rdown] = matrix[row][col + 1];
                const [Dright, Ddown] = matrix[row + 1][col];
                // console.log(Rright, Rdown, Dright, Ddown)
                const LimitRight = Math.min(Rright + 1, Dright);
                const LimitDown = Math.min(Rdown, Ddown + 1);
                max = Math.max(max, LimitRight * LimitDown, Rright + 1, Ddown + 1);
                console.log(max, LimitRight * LimitDown, Rright + 1, Ddown + 1);
                matrix[row][col] = [Rright + 1, Ddown + 1];
            }

            else matrix[row][col] = [0, 0]
        }
    }
    console.log(matrix);
    return max
};