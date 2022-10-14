var findMissingRanges = function (nums, lower, upper) {
    let start = lower - 1;
    nums.push(upper + 1);
    const LEN = nums.length;
    const ranges = [];
    for (let i = 0; i < LEN; i++) {
        let end = nums[i];
        if (end === start + 2) {
            ranges.push(`${start + 1}`)
        } else if (end > start + 2) {
            ranges.push(`${start + 1}->${end - 1}`)
        }
        start = end;
    }

    return ranges
}