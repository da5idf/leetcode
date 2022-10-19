var reverseBits = function (n) {
    let reverse = 0;
    let power = 31;
    while (n !== 0) {
        let LSB = n & 1;
        reverse |= LSB << power
        power--;
        n >>>= 1;
    }

    return reverse >>> 0
};