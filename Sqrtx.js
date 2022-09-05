var mySqrt = function (x) {
    let sqRoot = 0;

    while (x >= 1) {
        x = Math.floor(x / 2)
        sqRoot++;
    }
    return sqRoot
};