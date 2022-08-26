var insert = function (intervals, newInterval) {
    let intStart = newInterval[0];
    let intEnd = newInterval[1];
    let newIntervals = [];

    let i = 0;
    // push in all intervals with a start before newInerval start
    while (i < intervals.length && intervals[i][0] <= intStart) {
        newIntervals.push(intervals[i]);
        i++;
    }

    // add new interval
    if (!newIntervals.length) {
        newIntervals.push(newInterval);
    } else {
        // newInterval start overlaps with prior interval
        // remove the newInterval that we just added
        // reset the end of prior interval to intEnd
        if (intStart <= newIntervals[i - 1][1]) {
            // newIntervals.pop();
            newIntervals[i - 1][1] = Math.max(intEnd, newIntervals[i - 1][1]);
        } else {
            // new interval starttime is > last interval end time
            newIntervals.push(newInterval)
        }
    }

    // add remaining intervals, merge as necessary
    while (i < intervals.length) {
        newIntervals.push(intervals[i]);
        let length = newIntervals.length
        // merge as necessary
        if (newIntervals[length - 2][1] >= newIntervals[length - 1][0]) {
            newIntervals.pop();
            newIntervals[length - 2][1] = Math.max(newIntervals[length - 2][1], intervals[i][1])
        }
        i++;
    }
    return newIntervals
};

let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
// let newInterval = [20, 30]
let newInterval = [5, 6]

console.log(insert(intervals, newInterval))