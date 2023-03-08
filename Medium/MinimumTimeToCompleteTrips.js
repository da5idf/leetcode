var minimumTime = function (times, totalTrips) {
    let min = 1;
    let max = Infinity;
    for (const time of times) {
        max = Math.min(max, time * totalTrips)
    }

    const countTrips = (time) => {
        let tripCount = 0;
        for (const tripTime of times) {
            tripCount += Math.floor(time / tripTime)
        }
        return tripCount;
    }

    while (min <= max) {
        let time = Math.floor((min + max) / 2);

        if (countTrips(time) < totalTrips) min = time + 1;
        else max = time - 1;
    }

    return min;
};