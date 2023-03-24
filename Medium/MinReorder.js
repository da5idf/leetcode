var minReorder = function (n, connections) {
    let adjacencies = new Array(n).fill().map(() => []);

    for (const [start, end] of connections) {
        adjacencies[start].push([end, 1]);
        adjacencies[end].push([start, 0]);
    }

    let switchCount = 0;
    let queue = [0];
    const reachable = new Array(n).fill(false);

    while (queue.length) {
        let current = queue.shift();
        reachable[current] = true;
        adjacencies[current].forEach(([next, sign]) => {
            if (!reachable[next]) {
                queue.push(next);
                switchCount += sign;
            }
        });
    }

    return switchCount;
};
