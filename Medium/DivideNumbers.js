var divide = function (dividend, divisor) {
    const BIGGEST = 2 ** 31 - 1;
    const SMALLEST = -(2 ** 31);
    const HALFSMALL = -(2 ** 30);
    if (dividend === SMALLEST && divisor === -1) {
        return BIGGEST
    }
    let negatives = 2;
    if (dividend > 0) {
        negatives--;
        dividend = -dividend;
    }

    if (divisor > 0) {
        negatives--;
        divisor = -divisor;
    }

    let quotient = 0
    const doublesPower = [];

    if (divisor < dividend) return 0;

    let powerOfTwo = -1;
    let value = divisor
    while (value >= HALFSMALL && value + value >= dividend) {
        doublesPower.push([value, powerOfTwo])
        value += value;
        powerOfTwo += powerOfTwo
    }
    quotient += powerOfTwo
    dividend -= value

    while (dividend <= divisor) {
        const [value, powTwo] = doublesPower.pop();
        if (value >= dividend) {
            dividend -= value;
            quotient += powTwo
        }
    }


    if (negatives !== 1) {
        return -quotient;
    }
    return quotient;
};


/*
var divide = function(dividend, divisor) {
    const BIGGEST = 2 ** 31 - 1;
    const SMALLEST = -(2 ** 31)
    if (dividend === SMALLEST && divisor === -1) {
        return BIGGEST
    }
    let negatives = 2;
    if (dividend > 0) {
        negatives--;
        dividend = -dividend;
    }
    
    if (divisor > 0) {
        negatives--;
        divisor = -divisor;
    }
        
    let quotient = 0
    while (dividend <= divisor) {
        dividend -= divisor;
        quotient--;
    }
    if (negatives !== 1) {
        return -quotient;
    }
    return quotient;
};
*/