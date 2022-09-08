var findMinHeightTrees = function (n, edges) {
    // if there are 2 or fewer nodes, return them
    if (n <= 2) {
        const centroids = [];
        for (let i = 0; i < n; i++) {
            centroids.push(i);
        }
        return centroids;
    }

    // set up adjacency list for each node
    const adjLists = {};
    for (const [A, B] of edges) {
        if (adjLists[A]) {
            adjLists[A].add(B)
        } else {
            adjLists[A] = new Set().add(B);
        }

        if (adjLists[B]) {
            adjLists[B].add(A)
        } else {
            adjLists[B] = new Set().add(A);
        }
    }

    // find the first leaves
    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (adjLists[i].size === 1) leaves.push(i);
    }

    let nodeCount = n;
    while (nodeCount > 2) {
        // update nodeCount
        nodeCount -= leaves.length;
        // track new leaves
        let newLeaves = [];
        for (const leaf of leaves) {
            // get the node that this leaf is connected to
            const neighbor = adjLists[leaf].values().next().value;
            // remove leaf from the neighbor's adjList
            adjLists[neighbor].delete(leaf);
            // neighbor is now a leaf if its size has become 1
            if (adjLists[neighbor].size === 1) newLeaves.push(neighbor)
        }
        // update leaves
        leaves = newLeaves
    }
    return leaves;
};

let n = 6, edges = [[0, 1], [0, 2], [0, 3], [3, 4], [4, 5]]
// let n = 1, edges = []
// let n = 2, edges = [[0, 1]]

console.log(findMinHeightTrees(n, edges))