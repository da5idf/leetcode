var mySqrt = function (x) {

    if (x < 2) return x;

    let sqRoot = 0;

    while (x > 1) {
        x = Math.floor(x / 2)
        sqRoot++;
    }
    return sqRoot
};