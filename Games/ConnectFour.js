class ConnectFour {
    constructor() {
        this.board = new Array(8).fill().map(() => new Array(9).fill(new GamePiece()));
        this.player = 1;
        this.minRow = new Array(9).fill(6);
    }

    drop(col) {
        let val;
        this.player === 1 ? val = 1 : val = -1;
        const row = this.minRow[col];
        this.minRow[col]--;
        const board = this.board;
        board[row][col] = new GamePiece(
            this.player,
            board[row][col - 1][this.player].horiz + board[row][col + 1][this.player].horiz + val,
            board[row - 1][col][this.player].vert + board[row + 1][col][this.player].vert + val,
            board[row - 1][col - 1][this.player].diagLtoR + board[row + 1][col + 1][this.player].diagLtoR + val,
            board[row - 1][col + 1][this.player].diagRtoL + board[row + 1][col - 1][this.player].diagRtoL + val,

        )
        if (checkWin(board[row][col], this.player)) {
            console.log(board[row][col])
            console.log(`Player ${this.player} wins!`)
        }

        this.player === 1 ? this.player = 0 : this.player = 1;
    }

    printBoard() {
        const playerBoard = []
        for (let row = 0; row < 8; row++) {
            let boardRow = ""
            for (let col = 0; col < 9; col++) {
                switch (this.board[row][col].player) {
                    case 1:
                        boardRow += "1 "
                        break;
                    case 0:
                        boardRow += "0 "
                        break;
                    default:
                        boardRow += "U "
                        break;
                }
            }
            playerBoard.push(boardRow)
        }
        console.log(playerBoard);
    }

}

class GamePiece {
    constructor(player, horiz, vert, diagLtoR, diagRtoL) {
        let otherPlayer;
        this.player = player;
        if (player === undefined) player = 1;
        player === 1 ? otherPlayer = 0 : otherPlayer = 1;
        this[player] = {
            horiz: horiz || 0,
            vert: vert || 0,
            diagLtoR: diagLtoR || 0,
            diagRtoL: diagRtoL || 0
        }
        this[otherPlayer] = {
            horiz: 0,
            vert: 0,
            diagLtoR: 0,
            diagRtoL: 0
        }
    }
}

var checkWin = function (gamePiece, player) {
    return (
        gamePiece[player].horiz >= 4 ||
        gamePiece[player].vert >= 4 ||
        gamePiece[player].diagLtoR >= 4 ||
        gamePiece[player].diagRtoL >= 4
    )
}
const game1 = new ConnectFour();
game1.drop(1) // 1
console.log("gameboard", game1.printBoard());
game1.drop(2)
console.log("gameboard", game1.printBoard());
game1.drop(2) // 1
console.log("gameboard", game1.printBoard());
game1.drop(3)
console.log("gameboard", game1.printBoard());
game1.drop(3) // 1
console.log("gameboard", game1.printBoard());
game1.drop(4)
console.log("gameboard", game1.printBoard());
game1.drop(3) // 1
console.log("gameboard", game1.printBoard());
game1.drop(4)
console.log("gameboard", game1.printBoard());
game1.drop(4) // 1
console.log("gameboard", game1.printBoard());
game1.drop(5)
console.log("gameboard", game1.printBoard());
game1.drop(4) // 1
console.log("gameboard", game1.printBoard());

// const piece1 = new GamePiece();
// const piece2 = new GamePiece(1, 1, 2, 3, 4);
// console.log(piece1)
// console.log(piece2)