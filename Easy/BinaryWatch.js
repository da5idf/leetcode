var readBinaryWatch = function (turnedOn) {
    const times = [];

    for (let hour = 0; hour < 12; hour++) {
        for (let min = 0; min < 60; min++) {
            if (getBitCount(hour) + getBitCount(min) === turnedOn) {
                if (min < 10) {
                    times.push(`${hour}:0${min}`)
                } else {
                    times.push(`${hour}:${min}`)
                }
            }
        }
    }
    return times
};

var getBitCount = function (num) {
    let bitCount = 0;
    let mask = 1;
    while (mask < 64) {
        console.log(mask, mask & num)
        if ((mask & num) > 0) bitCount++
        mask <<= 1
    }
    return bitCount
}

console.log(getBitCount(12))