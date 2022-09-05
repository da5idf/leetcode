var plusOne = function (digits) {
    let idx = digits.length - 1;
    digits[idx]++;

    while (idx >= 0 && digits[idx] === 10) {
        digits[idx] = 0;
        if (idx === 0) {
            digits.unshift(1);
            idx--;
        } else {
            idx--;
            digits[idx]++
        }
    }
    return digits;
};