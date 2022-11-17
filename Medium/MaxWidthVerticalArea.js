var maxWidthOfVerticalArea = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    let maxWidth = 0;
    let prior = points[0][0];
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] === points[i - 1][0]) continue;
        else {
            maxWidth = Math.max(maxWidth, points[i][0] - prior);
            prior = points[i][0];
        }
    }

    return maxWidth;
};