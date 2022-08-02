var climbStairs = function (n) {
    const pathNums = new Array(n).fill(0);

    pathNums[0] = 1;
    pathNums[1] = 2;

    return climb_stairs(n, pathNums);
}

var climb_stairs = function (n, pathNums) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (pathNums[n - 1]) return pathNums[n - 1]

    pathNums[n - 1] = climb_stairs(n - 1, pathNums) + climb_stairs(n - 2, pathNums);
    return pathNums[n - 1]
}

var climbStairs2 = function (n) {
    const pathNums = [];

    pathNums.push(1);
    pathNums.push(2);

    for (let i = 2; i < n; i++) {
        let prev = pathNums[i - 1];
        let prevPrev = pathNums[i - 2];
        pathNums.push(prev + prevPrev);
    }

    return pathNums[n - 1];
}

console.log(climbStairs(45));