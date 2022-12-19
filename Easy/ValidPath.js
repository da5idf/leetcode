var validPath = function (n, edges, source, destination) {
    if (source === destination) return true;

    const map = {};

    for (const [from, to] of edges) {
        if (map[from]) map[from].push(to)
        else map[from] = [to];

        if (map[to]) map[to].push(from);
        else map[to] = [from];
    }

    const visited = new Set().add(source);
    const queue = [source];

    while (queue.length) {
        const curr = queue.shift();
        const adjList = map[curr] || [];
        for (const node of adjList) {
            if (node === destination) return true;
            else if (!visited.has(node)) {
                queue.push(node);
                visited.add(node);
            }
        }
    }

    return false;
};