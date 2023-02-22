function shipWithinDays(weights: number[], days: number): number {
    var canShipWithin = function (capacity: number): boolean {
        let duration = 1;
        let currentLoad = 0;
        for (const weight of weights) {
            currentLoad += weight;
            if (currentLoad > capacity) {
                duration++;
                currentLoad = weight;
            }
        }
        return duration <= days;
    };

    let lowerBound = 0;
    let upperBound = 0;
    for (const weight of weights) {
        upperBound += weight;
        lowerBound = Math.max(lowerBound, weight);
    }

    while (lowerBound <= upperBound) {
        let mid = Math.floor((lowerBound + upperBound) / 2);

        if (canShipWithin(mid)) upperBound = mid - 1;
        else lowerBound = mid + 1;
    }

    return lowerBound;
}
