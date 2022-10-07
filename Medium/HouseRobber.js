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