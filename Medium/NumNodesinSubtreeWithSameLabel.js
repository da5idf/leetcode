// my first solution
var countSubTrees = function (n, edges, labels) {
    const nodeMap = {};
    for (const [v, k] of edges) {
        if (nodeMap[v] !== undefined) nodeMap[v].push(k)
        else nodeMap[v] = [k]

        if (nodeMap[k] !== undefined) nodeMap[k].push(v)
        else nodeMap[k] = [v]
    }

    const subtreeMatches = new Array(n).fill(0);
    const visited = new Set();
    var helperDFS = function (node, map = new Array(26).fill(0)) {
        visited.add(node);
        const char = labels.charCodeAt(node) - 97;
        map[char]++;
        const adjList = nodeMap[node] || [];
        for (const next of adjList) {
            if (visited.has(next)) continue;
            const nextMap = helperDFS(next);
            for (let i = 0; i < 26; i++) {
                map[i] += nextMap[i]
            }
        }
        subtreeMatches[node] = map[char];
        return map;
    }

    helperDFS(0);
    return subtreeMatches;
};