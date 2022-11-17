var isRectangleOverlap = function (rec1, rec2) {
    let overlapX = rec1[0] < rec2[2] && rec2[0] < rec1[2];
    let overlapY = rec1[1] < rec2[3] && rec2[1] < rec1[3];

    return overlapX && overlapY
};


// this works but kind of ugly
var isRectangleOverlap = function (rec1, rec2) {
    let x = [[rec1[0], 1], [rec1[2], 1], [rec2[0], 2], [rec2[2], 2]];
    let y = [[rec1[1], 1], [rec1[3], 1], [rec2[1], 2], [rec2[3], 2]];
    x.sort((a, b) => a[0] - b[0]);
    y.sort((a, b) => a[0] - b[0]);

    let xOverlap = x[0][1] !== x[1][1] && x[1][0] !== x[2][0]
    let yOverlap = y[0][1] !== y[1][1] && y[1][0] !== y[2][0]

    return xOverlap && yOverlap
};