function solution(field, x, y) {
    const ROWS = field.length;
    const COLS = field[0].length;

    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    const bombMap = {};
    const queue = [[x, y]];
    const inQueue = new Set().add(`${x},${y}`)

    while (queue.length) {
        const [curRow, curCol] = queue.shift();
        let bombCount = 0;
        let nextQueue = [];
        // offset row and col for each direction
        for (let [deltaRow, deltaCol] of directions) {
            let row = curRow + deltaRow
            let col = curCol + deltaCol
            // make sure row and col are in bounds
            if (row > ROWS - 1 || row < 0 || col > COLS - 1 || col < 0) continue;
            if (field[row][col] === true) {
                bombCount++;
            } else {
                // we only want to add to the queue if this location has not AND will not be seen
                if (!inQueue.has(`${row},${col}`)) {
                    nextQueue.push([row, col])
                }
            }
        }
        bombMap[`${curRow},${curCol}`] = bombCount;
        // we need to add to our queue only if bombCount === 0;
        if (bombCount === 0) {
            nextQueue.forEach(location => {
                let [row, col] = location;
                queue.push(location)
                inQueue.add(`${row},${col}`)
            })

        }
    }

    // result array of -1's
    const result = new Array(ROWS).fill().map(() => new Array(COLS).fill(-1));
    // update result array for each location from bombMap
    for (const [key, value] of Object.entries(bombMap)) {
        const [row, col] = key.split(",");
        result[row][col] = value;
    }
    return result;
}

let field1 = [
    [false, true, true],
    [true, false, true],
    [false, false, true]
];
let x1 = 1;
let y1 = 1;
// console.log(solution(field1, x1, y1)) 
/*  [
    [-1,-1,-1], 
    [-1,5,-1], 
    [-1,-1,-1]
]
*/

let field2 = [
    [true, false, true, true, false],
    [true, false, false, false, false],
    [false, false, false, false, false],
    [true, false, false, false, false]
]
let x2 = 3
let y2 = 2
console.log(solution(field2, x2, y2))
/*  [
    [-1, -1, -1, -1, -1],
    [-1, 3, 2, 2, 1],
    [-1, 2, 0, 0, 0],
    [-1, 1, 0, 0, 0]
]
*/

let field3 = [
    [false, true],
    [false, false]
]
let x3 = 0
let y3 = 0
// console.log(solution(field3, x3, y3))
/* [
    [1, -1],
    [-1, -1]
]
*/