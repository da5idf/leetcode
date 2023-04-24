var solveNQueens = function (n) {
    const options = [];
    const placements = new Map(); // row -> col

    function validPlacement(row, col) {
        const diagonalVal = row - col;
        const antidiagonalVal = row + col;

        for (const placement of placements) {
            const [pRow, pCol] = placement;
            if (pRow === row || pCol === col) return false;

            const [pDiag, pAntiDiag] = [pRow - pCol, pRow + pCol];
            if (diagonalVal === pDiag || antidiagonalVal === pAntiDiag) return false;
        }

        return true;
    }

    function generateBoard() {
        let emptyRow = "";
        for (let i = 0; i < n; i++) emptyRow += "."
        let board = new Array(n).fill(emptyRow);

        for (const placement of placements) {
            const [row, col] = placement;
            board[row] = board[row].slice(0, col) + "Q" + board[row].slice(col + 1)

        }
        return options.push(board);
    }

    function backtrack(row) {
        if (row === n) {
            return generateBoard()
        };

        for (let col = 0; col < n; col++) { // given the row, iterate through the cols
            if (validPlacement(row, col)) {
                placements.set(row, col);
                backtrack(row + 1);
                placements.delete(row);
            }
        }
    }

    backtrack(0);
    return options
};