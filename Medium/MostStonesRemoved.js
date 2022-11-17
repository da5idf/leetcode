// DFS method
var removeStones = function (stones) {
    const numStones = stones.length;
    // create an adj list array
    // add K to col to create col buckets
    const K = Math.pow(10, 4) + 1;
    const adjLists = new Array(numStones).fill().map(() => []);
    for (let i = 0; i < numStones; i++) {
        const [row, col] = stones[i];
        adjLists[row].push(i);
        adjLists[col + K].push(i);
    }

    var dfs = function (i) {
        visited[i] = true;
        const queue = [i];
        while (queue.length) {
            const stoneIdx = queue.shift();
            const [row, col] = stones[stoneIdx];
            const adjacents = [...adjLists[row], ...adjLists[col + K]]
            adjacents.forEach(stone => {
                if (!visited[stone]) {
                    queue.push(stone);
                    visited[stone] = true;
                }
            })
        }
    }

    const visited = new Array(numStones).fill(false);
    let connectedCount = 0;
    for (let i = 0; i < numStones; i++) {
        if (!visited[i]) {
            connectedCount++;
            dfs(i)
        }
    }

    return numStones - connectedCount
}