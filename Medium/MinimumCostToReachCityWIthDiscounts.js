var minimumCost = function (n, highways, discounts) {
    const roadMap = {};
    for (const [start, end, toll] of highways) {
        if (!roadMap[start]) roadMap[start] = {};
        if (!roadMap[end]) roadMap[end] = {};

        roadMap[start][end] = toll;
        roadMap[end][start] = toll;
    }
};