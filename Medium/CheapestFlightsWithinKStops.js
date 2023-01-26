// updated solution
var findCheapestPrice = function (n, flights, src, dst, k) {
    const flightMap = new Array(n).fill().map(() => []);
    for (const [from, to, price] of flights) {
        flightMap[from].push([to, price]);
    }

    const minQueue = new MinPriorityQueue({ priority: x => x[2] });
    minQueue.enqueue([0, src, 0]);
    const stopsToVisit = new Array(n).fill(undefined);
    while (minQueue.size() !== 0) {
        const [stops, node, price] = minQueue.dequeue().element;
        stopsToVisit[node] = stops;
        if (node === dst) return price;
        if (stops > k) continue;

        for (const [to, nextPrice] of flightMap[node]) {
            if (stopsToVisit[to] !== undefined && stopsToVisit[to] <= stops) continue;
            minQueue.enqueue([stops + 1, to, price + nextPrice])
        }
    }
    return -1
};

/*
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
*/