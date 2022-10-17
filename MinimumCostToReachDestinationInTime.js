var minCost = function (maxTime, edges, passingFees) {
    const map = {};
    for (const [start, end, time] of edges) {
        if (!map[start]) map[start] = {};
        if (!map[end]) map[end] = {};

        map[start][end] = time
        map[end][start] = time
    }
    // console.log(map);
    const nodeCount = passingFees.length;
    let curNode = nodeCount - 1;
    const queue = [[[`${curNode}`], 0]];
    const paths = []
    while (queue.length) {
        // console.log("queue", queue)
        const [curPath, elapsed] = queue.shift();
        // console.log("curPath", curPath)
        const curNodeVal = curPath[curPath.length - 1];
        const curNode = map[curNodeVal];
        // console.log("curNode", curNode)
        for (const nextNode in curNode) {
            const pathTime = curNode[nextNode];
            // console.log("pathTime", nextNode, pathTime)
            // console.log(elapsed + pathTime <= maxTime)
            if (elapsed + pathTime <= maxTime) {
                // console.log(curNodeVal, curPath)
                if (nextNode === '0') {
                    paths.push([...curPath, nextNode]);
                } else if (curPath.indexOf(nextNode) === -1) {
                    queue.push([[...curPath, nextNode], elapsed + pathTime])
                }
            }
        }
        // console.log("***")
    }
    // console.log(paths);
    let minCost = 1000 * 1000 + 1
    paths.forEach(path => {
        let cost = path.reduce((prev, cur) => prev + passingFees[cur], 0)
        minCost = Math.min(minCost, cost)
    })
    return minCost
};


const
    maxTime = 500,
    edges = [[9, 7, 18], [26, 3, 12], [28, 45, 33], [47, 10, 27], [34, 18, 38], [32, 13, 39], [32, 26, 32], [12, 0, 2], [4, 1, 7], [5, 3, 2], [39, 25, 27], [45, 10, 34], [3, 19, 5], [25, 32, 23], [30, 10, 47], [37, 2, 31], [10, 32, 15], [23, 14, 19], [22, 6, 14], [45, 39, 38], [39, 21, 30], [42, 17, 42], [20, 17, 15], [24, 0, 27], [2, 46, 11], [2, 24, 13], [36, 22, 30], [2, 1, 31], [41, 35, 45], [4, 19, 20], [32, 27, 33], [38, 46, 1], [21, 11, 15], [33, 41, 2], [45, 18, 30], [8, 33, 50], [37, 11, 6], [25, 17, 42], [45, 39, 33], [7, 4, 49], [17, 42, 36], [36, 16, 9], [46, 25, 24], [43, 4, 6], [35, 13, 28], [1, 28, 1], [34, 35, 15], [38, 1, 15], [16, 6, 28], [13, 0, 42], [3, 30, 24], [43, 27, 35], [8, 0, 45], [27, 20, 47], [6, 16, 47], [0, 34, 35], [0, 35, 3], [40, 11, 24], [1, 0, 49], [44, 20, 32], [26, 12, 17], [3, 2, 25], [37, 25, 42], [27, 1, 15], [36, 25, 38], [24, 47, 33], [33, 28, 15], [25, 43, 37], [47, 31, 47], [29, 10, 50], [11, 1, 21], [29, 3, 48], [1, 25, 10], [48, 17, 16], [19, 24, 22], [30, 7, 2], [11, 22, 19], [20, 42, 41], [27, 3, 48], [17, 0, 34], [19, 14, 32], [49, 2, 20], [10, 3, 38], [0, 49, 13], [6, 3, 28], [42, 23, 6], [14, 8, 1], [35, 16, 3], [17, 7, 40], [18, 7, 49], [36, 35, 13], [14, 40, 45], [16, 33, 11], [31, 22, 33], [38, 15, 48], [15, 14, 25], [37, 13, 37], [44, 32, 7], [48, 1, 31], [33, 12, 20], [22, 26, 23], [4, 10, 11], [43, 28, 43], [19, 8, 14], [35, 31, 33], [28, 27, 19], [40, 11, 36], [36, 43, 28], [22, 21, 15]],
    passingFees = [199, 505, 107, 961, 682, 400, 304, 517, 512, 18, 334, 627, 893, 412, 922, 289, 19, 161, 206, 879, 336, 831, 577, 802, 139, 348, 440, 219, 273, 691, 99, 858, 389, 955, 561, 353, 937, 904, 858, 704, 548, 497, 787, 546, 241, 67, 743, 42, 87, 137]
console.log(minCost(maxTime, edges, passingFees));