// fastest, refactored second solution
var minFlips = function (a, b, c) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
        const aBit = (a >> i) & 1;
        const bBit = (b >> i) & 1;
        const cBit = (c >> i) & 1;
        let bitCount = aBit + bBit
        if (cBit) {
            count += (bitCount === 0);
        } else count += bitCount;

    }
    return count;
}
// faster solution by right shifting each element
var minFlips = function (a, b, c) {
    let count = 0;
    while (c > 0) {
        const aBit = a & 1;
        const bBit = b & 1;
        const cBit = c & 1;

        a >>= 1
        b >>= 1
        c >>= 1

        if (cBit === 1 && aBit === 0 && bBit === 0) {
            count++
        }
        else if (cBit === 0) {
            if (aBit === 1) count++
            if (bBit === 1) count++
        }
    }

    while (a > 0) {
        count += a & 1;
        a = a >> 1;
    }

    while (b > 0) {
        count += b & 1;
        b = b >> 1;
    }

    return count;
}


// my original solution which uses a mask
var minFlips = function (a, b, c) {
    let mask = 1;
    let count = 0;
    let max = Math.max(a, b, c);
    for (let i = 0; i < 31 && mask <= max; i++) {
        const aBit = mask & a;
        const bBit = mask & b;
        const cBit = mask & c;
        if (cBit > 0) {
            if ((aBit | bBit) === 0) count++;
        } else {
            if (aBit > 0) count++;
            if (bBit > 0) count++;
        }
        mask <<= 1
    }
    return count;
};