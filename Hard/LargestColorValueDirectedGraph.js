var largestPathValue = function (colors, edges) {
    const N = colors.length;
    const adjList = new Array(N).fill().map(() => []);

    for (const [from, to] of edges) {
        adjList[from].push(to);
    }

    let max = -1;
    const visited = new Set()
    const memo = new Array(N).fill().map(() => new Array(26).fill(0));
    for (let i = 0; i < N; i++) {
        // if (!visited.has(i)) {
        max = Math.max(max, dfs(i, new Set(), new Array(26).fill(0)), 0)
        // }
    }

    function dfs(node, inPath) {
        if (inPath.has(node)) return Infinity;

        const color = colors.charCodeAt(node) - 97;
        if (visited.has(node)) return memo[node][color]

        inPath.add(node);
        visited.add(node);

        if (memo[node][color] !== 0) {
            return memo[node][color];
        }

        for (const adjNode of adjList[node]) {
            if (dfs(adjNode, inPath) === Infinity) return Infinity
            for (let i = 0; i < 26; i++) {
                memo[node][i] = Math.max(memo[node][i], memo[adjNode][i]);
            }
        }

        memo[node][color]++;
        inPath.delete(node);

        return memo[node][color];
    }

    return max === Infinity ? -1 : max;
};

// TLE
var largestPathValue = function (colors, edges) {
    const N = colors.length;
    const adjList = new Array(N).fill().map(() => []);

    for (const [from, to] of edges) {
        adjList[from].push(to);
    }

    let max = -1;
    const masterVisited = new Set()
    for (let i = 0; i < N; i++) {
        if (!masterVisited.has(i)) {
            max = Math.max(max, dfs(i, new Set(), new Array(26).fill(0)), 0)
        }
    }

    function dfs(node, visited, colorCounts, curMax) {
        if (visited.has(node)) return Infinity;
        visited.add(node);
        masterVisited.add(node);

        const color = colors.charCodeAt(node) - 97;
        colorCounts[color]++;

        curMax = Math.max(max, colorCounts[color])

        for (const adjNode of adjList[node]) {
            curMax = Math.max(curMax, dfs(adjNode, visited, colorCounts, curMax));
        }

        colorCounts[color]--;
        visited.delete(node);

        return curMax;
    }

    return max === Infinity ? -1 : max;
};