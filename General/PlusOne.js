var plusOne = function (digits) {
    let length = digits.length;
    digits[length - 1]++;

    let carry = digits[length - 1] === 10;
    let idx = length - 1;
    while (carry && idx >= 0) {
        digits[idx] = 0;
        if (idx === 0) {
            digits.unshift(1);
            idx--;
        } else {
            idx--;
            digits[idx]++
            carry = digits[idx] === 10;
        }
    }
    return digits;
};