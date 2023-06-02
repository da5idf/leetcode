/*
Nothing too interesting here. First we create a graph
Then we dfs each node resetting our visited list each time.
We reset the visited list because i->j might be an edge,
but j->i might not. So we need to test every case.

Ends up being n^3 time! But no special tricks here
*/


var maximumDetonation = function (bombs) {
    const calculateDist = (p1, p2) => {
        const dx = Math.abs(p1[0] - p2[0])
        const dy = Math.abs(p1[1] - p2[1])
        return Math.sqrt(dx ** 2 + dy ** 2)
    }

    const N = bombs.length;
    const graph = new Array(N).fill().map(() => [])
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i === j) continue;

            const dist = calculateDist(bombs[i], bombs[j]);
            if (dist <= bombs[i][2]) graph[i].push(j);
        }
    }

    let visited = new Set()
    const dfs = (bomb) => {
        visited.add(bomb);
        let count = 1;
        for (const idx of graph[bomb]) {
            if (visited.has(idx)) continue;
            count += dfs(idx);
        }

        return count;
    }

    let max = 0;
    for (let i = 0; i < N; i++) {
        max = Math.max(max, dfs(i));
        visited = new Set();
    }

    return max;
};