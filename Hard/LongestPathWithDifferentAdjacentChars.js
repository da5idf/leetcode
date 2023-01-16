var longestPath = function (parents, s) {
    const N = parents.length
    const nodeMap = new Array(N).fill().map(() => []);
    for (let i = 1; i < N; i++) { // 0 doesn't have a parent
        const parent = parents[i];
        nodeMap[parent].push(i);
    }

    let maxLength = 1;
    var helperDFS = function (node) {
        let maxes = [0, 0]
        const adjList = nodeMap[node];

        for (const next of adjList) {
            const length = helperDFS(next);
            if (s[node] !== s[next]) {
                maxes = updateMaxes(length, maxes)
                maxLength = Math.max(maxLength, maxes[0] + maxes[1] + 1)
            }
        }
        return Math.max(...maxes) + 1
    }

    helperDFS(0, 0);
    return maxLength;
};

var updateMaxes = function (length, maxes) {
    if (length > maxes[0]) {
        maxes[1] = maxes[0];
        maxes[0] = length;
    }
    else if (length > maxes[1]) maxes[1] = length;
    return maxes;
}