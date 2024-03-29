// updated on 12/13
// I find this approach much more intuitive than the others
var rob = function (values) {
    for (let i = 1; i < values.length; i++) {
        const prev = values[i - 1];
        const prevPrev = values[i - 2] || 0;
        const cur = values[i];

        values[i] = Math.max(prev, prevPrev + cur)
    }

    return values[values.length - 1]
}

// fewest lines
var rob = function (values, start = 0, end = values.length - 1) {
    let maxRobbed = 0;
    let skipHouse = 0;

    for (let i = start; i <= end; i++) {
        let temp = maxRobbed;
        let current = values[i];
        maxRobbed = Math.max(current + skipHouse, maxRobbed);
        skipHouse = temp;
    }
}

/* easier to understand
var rob = function (values) {
    const NUM_HOUSES = values.length
    const totalRobbed = new Array(NUM_HOUSES).fill(0);

    totalRobbed[NUM_HOUSES - 1] = values[NUM_HOUSES - 1]
    totalRobbed[NUM_HOUSES - 2] = Math.max(values[NUM_HOUSES - 2], values[NUM_HOUSES - 1])

    for (let i = values.length - 3; i >= 0; i--) {
        const nextHouseValue = values[i + 1];
        const skipHouseValue = values[i + 2];

        totalRobbed[i] = Math.max(values[i] + skipHouseValue, nextHouseValue);
    }

    return Math.max(...totalRobbed);
}
*/

/* too many calls to the call stack
var rob = function (values) {
    const NUM_HOUSES = values.length
    if (NUM_HOUSES < 4) return Math.max(...values);

    const robbedMap = {};

    var robbedFrom = function (start) {
        if (start >= NUM_HOUSES) return 0;

        if (robbedMap[start]) return robbedMap[start];

        const max = Math.max(robbedFrom(start + 1), values[start] + robbedFrom(start + 2))

        robbedMap[start] = max;
        return max;
    }

    return robbedFrom(0);
};
*/