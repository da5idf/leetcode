// either num + 1 or num + 2 will be divisible by the found root.

var closestDivisors = function (num) {
    let plusOne = num + 1, plusTwo = num + 2;
    let root = Math.floor(Math.sqrt(plusTwo));
    while (root) {
        if (plusOne % root === 0) return [plusOne / root, root]
        if (plusTwo % root === 0) return [plusTwo / root, root]
        root--
    }
};