var kClosest = function (points, k) {

    let distIdx = [];

    for (let i = 0; i < points.length; i++) {
        let dist = Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2);
        distIdx.push([dist, i]);
    }

    distIdx.sort((a, b) => {
        return a[0] - b[0]
    });

    let ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(points[distIdx[i][1]]);
    }

    return ans;
};

let points = [[3, 3], [5, -1], [-2, 4]]
let k = 2

console.log(kClosest(points, k))