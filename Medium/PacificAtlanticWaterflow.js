// better DPF version
var pacificAtlantic = function (heights) {
    const flowPoints = [];
    const ROWS = heights.length;
    const COLS = heights[0].length;
    const pacificReach = new Array(ROWS).fill().map(() => new Array(COLS));
    const atlanticReach = new Array(ROWS).fill().map(() => new Array(COLS));

    var flow = function (row, col, reachable, prevHeight = 0) {
        if (row < 0 || row === ROWS || heights[row][col] === undefined) return;

        if (reachable[row][col]) return;

        const curHeight = heights[row][col];
        if (curHeight < prevHeight) return;

        reachable[row][col] = true;

        flow(row + 1, col, reachable, curHeight)
        flow(row - 1, col, reachable, curHeight)
        flow(row, col + 1, reachable, curHeight)
        flow(row, col - 1, reachable, curHeight)

    }

    for (let row = 0; row < ROWS; row++) {
        flow(row, 0, pacificReach);
        flow(row, COLS - 1, atlanticReach);
    }
    for (let col = 0; col < COLS; col++) {
        flow(0, col, pacificReach);
        flow(ROWS - 1, col, atlanticReach);
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (pacificReach[row][col] && atlanticReach[row][col]) flowPoints.push([row, col])
        }
    }

    return flowPoints
}

/* I thnk this workks, but it times out
var pacificAtlantic = function (heights) {
    const flowPoints = [];
    const ROWS = heights.length;
    const COLS = heights[0].length;

    var flow = function (row, col, prevHeight = 100001) {
        let [pacific, atlantic] = [false, false];

        if (row < 0 || row === ROWS || heights[row][col] === undefined) {
            if (row < 0 || col < 0) pacific = true;
            if (row === ROWS || col === COLS) atlantic = true;
            return [pacific, atlantic];
        }

        const curHeight = heights[row][col];
        if (curHeight === undefined || prevHeight < curHeight) return [false, false]

        heights[row][col] = 100001

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (const [deltaRow, deltaCol] of directions) {
            const [nextRow, nextCol] = [row + deltaRow, col + deltaCol];
            const [thisPacific, thisAtlantic] = flow(nextRow, nextCol, curHeight);
            [pacific, atlantic] = [pacific || thisPacific, atlantic || thisAtlantic]
        }

        heights[row][col] = curHeight;

        return [pacific, atlantic]
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const [pacific, atlantic] = flow(row, col)
            if (pacific && atlantic) {
                flowPoints.push([row, col])
            }
        }
    }
    return flowPoints
};
*/

const heights = [[3, 3, 3], [3, 1, 3], [0, 2, 4]]
console.log(pacificAtlantic(heights))