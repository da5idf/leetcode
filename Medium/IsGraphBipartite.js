// refactored solution that's cleaner, but same logic
// but instead of tracking odd length cycles with distance
// we track it using alternating colors
var isBipartite = function (graph) {

    const color = new Array(graph.length).fill(-1);

    for (let i = 0; i < graph.length; i++) {
        if (color[i] === -1) {
            color[i] = 0;
            const stack = [i];
            while (stack.length) {
                const cur = stack.pop();
                for (const node of graph[cur]) {
                    if (color[node] === -1) {
                        stack.push(node)
                        color[node] = color[cur] ^ 1;
                    }
                    else if (color[node] === color[cur]) return false;
                }
            }
        }
    }
    return true;
}

// my solution which determines if there's an
// odd length cycle.
var isBipartite = function (graph) {

    const seen = new Array(graph.length).fill(false);
    const distances = new Array(graph.length).fill(0);

    for (let i = 0; i < graph.length; i++) {
        if (!dfs([i])) return false;
    }
    return true;

    function dfs(queue) {
        if (seen[queue[0]]) return true;
        seen[queue[0]] = true;
        let dist = 0;
        while (queue.length) {
            const LEN = queue.length;
            dist++;
            for (let i = 0; i < LEN; i++) {
                let cur = queue.shift();
                for (const node of graph[cur]) {
                    if (!seen[node]) {
                        queue.push(node)
                        seen[node] = true;
                        distances[node] = dist;
                    }
                    else if ((distances[node] + distances[cur]) % 2 === 0) return false;
                }
            }
        }
        return true;
    }
}