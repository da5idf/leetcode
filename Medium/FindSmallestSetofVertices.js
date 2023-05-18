// after thinking through my solution below, a much simpler 
// version from the same logic crystalized. Essentially,
// we return a set of nodes that have no in-coming edges
var findSmallestSetOfVertices = function (n, edges) {
    const hasEdge = new Array(n).fill(false);

    for (const [from, to] of edges) {
        hasEdge[to] = true;
    }

    const answer = [];
    for (let i = 0; i < n; i++) {
        if (hasEdge === false) answer.push(i);
    }

    return answer;
}

// my original very slow solution
// Essentially, ths algorithm removes leaves one at a time.
// We add a node to the smallest set if when it gets added to
// the leaves array we determine that it has no edges pointing to it.
var findSmallestSetOfVertices = function (n, edges) {
    const map = {};
    const reverseMap = {}
    for (const [from, to] of edges) {
        map[from] ? map[from].add(to) : map[from] = new Set().add(to);
        reverseMap[to] ? reverseMap[to].add(from) : reverseMap[to] = new Set().add(from);
    }
    const leaves = [];
    getLeaves();

    const smallestSet = [];
    while (leaves.length) {
        const leaf = leaves.pop();
        const cameFromNodes = reverseMap[leaf] || new Set();
        if (cameFromNodes.size) {
            for (const cameFrom of reverseMap[leaf]) {
                map[cameFrom].delete(leaf);
                if (map[cameFrom].size === 0) leaves.push(cameFrom);
            }
        } else smallestSet.push(leaf);
    }

    return smallestSet;

    function getLeaves() {
        for (let i = 0; i < n; i++) {
            if (!map[i]) leaves.push(i)
        }
    }
};