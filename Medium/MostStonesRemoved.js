// DFS method
var removeStones = function (stones) {
    const numStones = stones.length;
    // create an adj list array
    const adjLists = new Array(numStones).fill().map(() => []);
    for (let i = 0; i < numStones; i++) {
        const [rowI, colI] = stones[i];
        for (let j = i + 1; j < numStones; j++) {
            const [rowJ, colJ] = stones[j];
            if (rowI === rowJ || colI === colJ) {
                adjLists[i].push(j); // the j-th stone is adj to the i-th stone
                adjLists[j].push(i); // the i-th stone is adj to the j-th stone
            }
        }
    }

    var dfs = function (i) {
        const queue = [i];
        while (queue.length) {
            let current = queue.shift();
            adjLists[current].forEach(stone => {
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