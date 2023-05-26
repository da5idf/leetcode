var new21Game = function (n, k, maxPts) {
    let p = new Array(n + 1).fill(0);
    p[0] = 1;
    let s = k > 0 ? 1 : 0
    for (let i = 1; i <= n; i++) {
        p[i] = s / maxPts;
        if (i < k) {
            s += p[i];
        }
        if (i - maxPts >= 0 && i - maxPts < k) {
            s -= p[i - maxPts];
        }
    }

    let ans = 0;
    for (let i = k; i <= n; i++) {
        ans += p[i];
    }

    return ans
};

// TLE
var new21Game = function (n, k, maxPts) {
    let p = new Array(n + 1).fill(0);
    p[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= maxPts; j++) {
            if (i - j >= 0 && i - j < k) p[i] += p[i - j] / maxPts;
        }
    }

    let ans = 0;
    for (let i = k; i <= n; i++) {
        ans += p[i];
    }

    return ans
};

/*
maxPts = 3
1
    0 -> 1 with p = 1/3
    1/3     .3333
2   0 -> 2 with p = 1/3
    1 -> 2 with p = 1/3 * 1/3 = 1/9
    4/9     .4444
3   0 -> 3 with p = 1/3         9/27
    1 -> 3 with p = 1/3 * 1/3   3/27
    2 -> 3 with p = 4/9 * 1/3   4/27
    16/27   .59259   
4   1 -> 4 with p = 1/3 * 1/3   9/81
    2 -> 4 with p = 4/9 * 1/3   12/81
    3 -> 4 with p = 16/27 * 1/3 16/81
    37/81   .45679
*/