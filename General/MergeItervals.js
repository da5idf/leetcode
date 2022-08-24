var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    });

    let merged = [intervals[0]]
    console.log(intervals)
    for (let i = 1; i < intervals.length; i++) {
        let prev = merged[merged.length - 1];
        let current = intervals[i];
        if (prev[1] >= current[1]) {
            // if prev end is > current end then skip it
            continue;
        } else if (prev[1] >= current[0]) {
            // if prev end is inbetween current
            let end = current[1];
            prev[1] = end;
        } else {
            merged.push(current)
        }
    }

    return merged;
};

let intervals = [[1, 3], [0, 7], [8, 10], [2, 6], [15, 18]]
console.log(merge(intervals))