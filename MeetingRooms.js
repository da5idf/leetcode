var canAttendMeetings = function (intervals) {

    if (intervals.length < 2) return true;

    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    for (let i = 1; i < intervals.length; i++) {
        let [start1, end1] = intervals[i - 1];
        let [start2, end2] = intervals[i];

        if ((start2 < end1 && start2 >= start1) || (end2 >= start1 && end2 <= end1)) {
            return false
        }
    }
    return true;
};

let intervals = [[12, 13], [6, 11], [2, 19]];

console.log(canAttendMeetings(intervals))