var findCheapestPrice = function (n, flights, src, dst, k) {
    const flightMap = {};
    for (const [from, to, cost] of flights) {
        if (!flightMap[from]) flightMap[from] = []

        flightMap[from].push([to, cost])
    }

    // minHeap[i] = [city, cost, numStops]
    const minHeap = [[src, 0, 0]]
    const visited = new Map();
    while (minHeap.length) {
        const [city, curCost, numStops] = minHeap.shift();
        visited.set(city, numStops)

        if (city === dst) return curCost;
        if (numStops === k + 1 || !flightMap[city]) continue; // we have exhausted all our stops/cities

        for (const [nextCity, nextCost] of flightMap[city]) {
            if (visited.has(nextCity) && visited.get(nextCity) <= numStops) continue;
            minHeap.push([nextCity, curCost + nextCost, numStops + 1])
        }

        minHeap.sort((a, b) => a[1] - b[1]) // order from lowest cost to highest
    }
    return -1
};