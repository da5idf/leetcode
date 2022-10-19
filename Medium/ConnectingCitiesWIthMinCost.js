// Kruskal's algorithm with Union Find
class DisjointSet {
    constructor(n) {
        this.weights = [];
        this.parents = [];
        for (let i = 0; i <= n; i++) {
            this.weights.push(i)
            this.parents.push(i)
        }
    }

    union(rootA, rootB) {
        this.parents[rootB] = rootA;
    }

    find(a) {
        while (a != this.parents[a]) {
            this.parents[a] = this.parents[this.parents[a]];
            a = this.parents[a]
        }
        return a;
    }
}

var minimumCost = function (n, connections) {
    const disjointSet = new DisjointSet(n);

    connections.sort((a, b) => a[2] - b[2]);
    let totalCost = 0;
    for (const [nodeA, nodeB, cost] of connections) {
        const parentA = disjointSet.find(nodeA)
        const parentB = disjointSet.find(nodeB)

        if (parentA === parentB) continue;

        disjointSet.union(parentA, parentB);
        totalCost += cost;
        n--;
    }

    return n === 1 ? totalCost : -1
}
/*
let connections = [[1, 2, 5], [1, 3, 6], [2, 3, 1]]
console.log(minimumCost(3, connections))

var minimumCost = function (n, connections) {
    const roadMap = {};
    for (const [from, to, cost] of connections) {
        if (!roadMap[from]) roadMap[from] = [];
        if (!roadMap[to]) roadMap[to] = [];

        roadMap[from].push([to, cost]);
        roadMap[to].push([from, cost]);

    }

    const visited = new Set();
    let city = 1;
    let totalCost = 0;
    let edgeChoices = [roadMap[city]]
    while (city) {

        visited.add(city);

        let minCost = 100001
        for (const [nextCity, nextCost] of edgeChoices) {
            if (!visited.has(nextCity) && nextCost < minCost) {
                minCost = nextCost;
                city = nextCity;
            }
        }
        totalCost += minCost
        edgeChoices = [...edgeChoices, ...roadMap[nextCity]]
    }

    return visited.size === n ? totalCost : -1;
}
*/