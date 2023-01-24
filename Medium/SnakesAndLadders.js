var snakesAndLadders = function (board) {
    const n = board.length

    var getPos = function (pos) {
        let row = Math.floor((pos - 1) / n)
        let col = (pos - 1) % n;
        col = row % 2 === 0 ? col : n - 1 - col;
        row = n - 1 - row
        return [row, col]
    }

    const queue = [1];
    const map = { 1: 0 }
    while (queue.length) {
        let curr = queue.shift();
        if (curr === n * n) return map[curr]
        for (let pos = curr + 1; pos <= Math.min(curr + 6, n ** 2); pos++) {
            const [row, col] = getPos(pos)
            const next = board[row][col] === -1 ? pos : board[row][col]
            if (map[next] === undefined) {
                queue.push(next);
                map[next] = map[curr] + 1;
            }
        }
    }
    return -1
};