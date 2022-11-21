var outerTrees = function (trees) {
    // fill each element with -1 for min (will update to at least 0)
    // fill each element with 101 for max (will update to at most 100)
    const rowMinMax = new Array(101).fill().map(() => [-1, 101]);
    const colMinMax = new Array(101).fill().map(() => [-1, 101]);

    for (let i = 0; i < trees.length; i++) {
        const [x, y] = trees[i]

        if (x < rowMinMax[y][0]) rowMinMax[y][0] = x;
        else if (x > rowMinMax[y][1]) rowMinMax[y][1] = x;

        if (y < colMinMax[x][0]) colMinMax[x][0] = y;
        else if (y > colMinMax[y][1]) colMinMax[x][0] = y;
    }

    const boundary = []
    for (let i = 0; i < trees.length; i++) {
        const [x, y] = trees[i];

        if (rowMinMax[y][0] === x || rowMinMax[y][1] === x) boundary.push(trees[i])
        else if (colMinMax[x][0] === y || colMinMax[x][1] === y) boundary.push(trees[i])
    }
};