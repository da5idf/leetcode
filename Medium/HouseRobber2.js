
/*
var rob = function (values) {
    const NUM_HOUSES = values.length
    if (NUM_HOUSES < 3) return Math.max(...values);
    
    const totalRobbed = new Array(NUM_HOUSES).fill(0);

    totalRobbed[NUM_HOUSES - 1] = values[NUM_HOUSES - 1]
    totalRobbed[NUM_HOUSES - 2] = Math.max(values[NUM_HOUSES - 2], values[NUM_HOUSES - 1])
    
    // Don't rob house 1
    for (let i = values.length - 3; i >= 1; i--) {
        const nextHouseValue = totalRobbed[i + 1];
        const skipHouseValue = totalRobbed[i + 2];

        totalRobbed[i] = Math.max(values[i] + skipHouseValue, nextHouseValue);
    }
    
    const skipHouseOne = totalRobbed[1]; // we skipped house 0
    
    totalRobbed[NUM_HOUSES - 2] = values[NUM_HOUSES - 2];
    totalRobbed[NUM_HOUSES - 3] = Math.max(values[NUM_HOUSES - 2], values[NUM_HOUSES - 3]);
    
    // Don't rob House 1
    for (let i = values.length - 4; i >= 0; i--) {
        const nextHouseValue = totalRobbed[i + 1];
        const skipHouseValue = totalRobbed[i + 2];

        totalRobbed[i] = Math.max(values[i] + skipHouseValue, nextHouseValue);
    }

    return Math.max(skipHouseOne, totalRobbed[0]);
}
*/