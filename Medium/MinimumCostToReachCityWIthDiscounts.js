var minimumCost = function (n, highways, discounts) {
    const roadMap = {};
    for (const [start, end, toll] of highways) {
        if (!roadMap[start]) roadMap[start] = [];
        if (!roadMap[end]) roadMap[end] = [];

        roadMap[start].push([end, toll]);
        roadMap[end].push([start, toll]);
    }

    // [cost, [decreasing toll costs], city]
    const minHeap = [[0, [], 0]]
    const visited = new Map();
    while (minHeap.length) {
        const [cost, tollCosts, city] = minHeap.shift();

        if (city === n - 1) return cost;
        visited.set(city, cost);

        for (const [nextCity, nextToll] of roadMap[city]) {
            nextCost = getNextCost(nextToll, tollCosts, discounts);
            if ()
        }
    }
    return -1;
};

var getNextCost = function (nextToll, tollCosts, discounts) {
    const allTolls = [...tollCosts, nextToll].sort((a, b) => b - a)
    let totalCost = 0;
    for (let i = 0; i < allTolls.length; i++) {
        if (discounts > 0) tollCosts += Math.floor(allTolls[i] / 2)
        else tollCosts += allTolls[i];
        discounts--;
    }
    return totalCost;
}