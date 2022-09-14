const Shape = require("../Shape");

class Tetris {
    constructor(height, width) {
        if (!height || !width) {
            throw new Error("Please provide a height and width for your gameboard")
        }
        this.height = height;
        this.width = width;
        this.board = this.getBoard();
        this.currentShape = new Shape()
        this.curShapePos = this.getStartingShapePos() // row, col of top left of game piece
    }

    getBoard() {
        const height = this.height;
        const width = this.width;
        // for a new gameboard, add an extra column on each side for landscape
        // add row on bottom for landscape
        // add 4 extra rows on top for "gameover" overflow. ex. a vertical I can't drop into the gameboard -> gameover
        const board = new Array(height + 5).fill().map(() => new Array(width + 2).fill(false))
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (row > 3 && col === 0 || col === board[0].length - 1 || row === board.length - 1)
                    board[row][col] = "L"
            }
        }
        return board;
    }

    printBoard() {
        const gameBoard = this.board
        const printBoard = [];
        const ROWS = this.board.length;
        const COLS = this.board[0].length;

        for (let row = 0; row < ROWS; row++) {
            let boardRow = "";
            for (let col = 0; col < COLS; col++) {
                if (gameBoard[row][col] === true) {
                    boardRow += "T "
                } else if (row < 4 || gameBoard[row][col] === false) {
                    boardRow += "  "
                } else {
                    boardRow += "L "
                }
            }
            printBoard.push(boardRow)
        }
        console.log(printBoard)
    }

    getStartingShapePos() {
        // start in row such that bottom of shape touches top of board
        const heightOfShape = this.currentShape.grid.length;
        return [4 - heightOfShape, Math.floor((1 + this.width) / 2)]
    }

    keypress(key) {
        const [curRow, curCol] = this.curShapePos;
        switch (key) {
            case "L":
                if (this.checkMove([0, -1])) {
                    return this.curShapePos = [curRow, curCol - 1];
                } else return
            case "R":
                if (this.checkMove([0, 1])) {
                    return this.curShapePos = [curRow, curCol + 1];
                } else return
            case "D":
                return this.currentShape.rotateCounterClockwise();
            case "U":
                return this.currentShape.rotateClockwise();
            default:
                return;
        }
    }

    onTick() {

        const checkFalling = () => {
            console.log(this.curShapePos)
            const [originRow, originCol] = this.curShapePos;
            const falling = this.checkMove([1, 0])
            if (!falling) {
                clearInterval(fallingInterval); // immediately stop the falling interval
                this.commitShapeToBoard(); // add the shape to the gameboard
                this.printBoard();
                const gameOver = this.checkGameOver();
                if (!gameOver) { // if we are still playing
                    this.currentShape = new Shape(); // generate a new shape to be dropped
                    this.curShapePos = this.getStartingShapePos(); // generate a new origin point
                    this.onTick(); // initiate new fall interval.
                }
            } else {
                this.curShapePos = [originRow + 1, originCol]
            }
        }

        const fallingInterval = setInterval(checkFalling, 1000)
    }

    checkMove([deltaRow, deltaCol]) {
        const [originRow, originCol] = this.curShapePos;
        const shape = this.currentShape.grid
        const shapeLen = shape.length
        for (let row = 0; row < shapeLen; row++) {
            for (let col = 0; col < shapeLen; col++) {
                if (shape[row][col] === false) continue
                else {
                    if (this.board[originRow + row + deltaRow][originCol + col + deltaCol] !== false) return false
                }
            }
        }
        return true;
    }

    commitShapeToBoard() {
        const [originRow, originCol] = this.curShapePos;
        const shape = this.currentShape.grid;
        const shapeLen = shape.length
        for (let row = 0; row < shapeLen; row++) {
            for (let col = 0; col < shapeLen; col++) {
                if (shape[row][col]) {
                    this.board[originRow + row][originCol + col] = true;
                }
            }
        }
    }

    checkGameOver() {
        for (let row = 3; row >= 0; row--) {
            const idx = this.board[row].indexOf(true);
            if (this.board[row].indexOf(true) !== -1) { // a shape is above the gamespace -> gameover
                console.log(idx)
                console.log("GAME OVER");
                return true;
            }
        }
        return false;
    }
}

const tetris1 = new Tetris(10, 9);
// console.log(tetris1.currentShape)
tetris1.printBoard()
tetris1.onTick();
setTimeout(() => {
    console.log(tetris1.curShapePos)
    tetris1.currentShape.rotateClockwise();
    console.log(tetris1.curShapePos)
    tetris1.keypress("L")
    console.log(tetris1.curShapePos)
    tetris1.keypress("L")
    console.log(tetris1.curShapePos)
    tetris1.keypress("L")
    console.log(tetris1.curShapePos)
    tetris1.keypress("L")
    console.log(tetris1.curShapePos)
    tetris1.keypress("L")
    console.log(tetris1.curShapePos)
}, 7010);