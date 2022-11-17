var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const areaA = (ax2 - ax1) * (ay2 - ay1);
    const areaB = (bx2 - bx1) * (by2 - by1);

    const left = Math.max(ax1, bx1);
    const right = Math.min(ax2, bx2);
    const xOverlap = right - left;

    const top = Math.min(ay2, by2);
    const bottom = Math.max(ay1, by1);
    const yOverlap = top - bottom;

    if (xOverlap > 0 && yOverlap > 0) return areaA + areaB - xOverlap * yOverlap
    return areaA + areaB
};