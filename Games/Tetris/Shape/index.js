class Shape {
    constructor(name) {
        if (!name) name = ["O", "I", "S", "Z", "T", "J", "L"][Math.floor(Math.random() * 7)]
        this.name = name;
        this.shape = this.getShape(name);
        this.grid = this.getGrid()
    }

    getShape(name) {
        switch (name) {
            case "O":
                return [[true, true], [true, true]];
            case "I":
                return [[true, true, true, true], new Array(4).fill(false), new Array(4).fill(false), new Array(4).fill(false)];
            case "S":
                return [[false, true, true], [true, true, false]];
            case "Z":
                return [[true, true, false], [false, true, true]];
            case "T":
                return [[true, true, true], [false, true, false], [false, false, false]];
            case "J":
                return [[true, true, true], [false, false, true], [false, false, false]];
            case "L":
                return [[true, true, true], [true, false, false], [false, false, false]];
            default:
                return
        }
    }

    getGrid() {
        let random = Math.random();
        if (random < .25) {
            return this.rotateClockwise()
        } else if (random < .5) {
            return this.rotateClockwise(this.rotateClockwise())
        } else if (random < .75) {
            return this.rotateCounterClockwise()
        } else return this.shape
    }

    rotateClockwise() {
        const shape = this.grid || this.shape;
        const ROWS = shape.length;
        const COLS = shape[0].length;

        const transposed = [];

        for (let col = 0; col < COLS; col++) {
            const transposeRow = []
            for (let row = 0; row < ROWS; row++) {
                transposeRow.push(shape[row][col])
            }
            transposed.push(transposeRow.reverse());
        }

        this.grid = transposed;
        return transposed;
    }

    rotateCounterClockwise() {
        const shape = this.grid || this.shape;
        const ROWS = shape.length;
        const COLS = shape[0].length;

        const transposed = [];

        for (let col = COLS - 1; col >= 0; col--) {
            const transposeRow = []
            for (let row = 0; row < ROWS; row++) {
                transposeRow.push(shape[row][col])
            }
            transposed.push(transposeRow);
        }

        this.grid = transposed;
        return transposed;
    }
}

// const s1 = new Shape("T");
// console.log(s1.grid);
// s1.rotateClockwise();
// console.log(s1.grid);
// s1.rotateClockwise();
// console.log(s1.grid);
// s1.rotateCounterClockwise();
// console.log(s1.grid);

module.exports = Shape

// rotateClockwise() {
//     const LEN = this.shape.length;
//     const shape = this.shape

//     for (let row = 0; row < Math.floor(LEN / 2); row++) {
//         for (let col = row; col < LEN - row - 1; col++) {
//             let curRow = row, curCol = col
//             let previous = shape[curRow][curCol]
//             for (let i = 0; i < 4; i++) {
//                 let temp = shape[curCol][LEN - curRow - 1];
//                 shape[curCol][LEN - curRow - 1] = previous;
//                 previous = temp;
//                 [curRow, curCol] = [curCol, LEN - curRow - 1]
//             }
//         }
//     }
//     return shape
// };

// rotateCounterClockwise() {
//     const LEN = this.shape.length;
//     const shape = this.shape;

//     for (let row = 0; row < Math.floor(LEN / 2); row++) {
//         for (let col = row; col < LEN - row - 1; col++) {
//             let curRow = row, curCol = col
//             let previous = shape[curRow][curCol]
//             for (let i = 0; i < 4; i++) {
//                 let temp = shape[LEN - curCol - 1][curRow]; // 0, 0 -> 2, 0
//                 shape[LEN - curCol - 1][curRow] = previous;
//                 previous = temp;
//                 [curRow, curCol] = [LEN - curCol - 1, curRow]
//             }
//         }
//     }
//     return shape
// };