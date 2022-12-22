var sumOfDistancesInTree = function (n, edges) {
    const graph = new Array(n).fill().map(() => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const sumDistances = new Array(n).fill(0);

    var dfs = function (node) {

    }


};