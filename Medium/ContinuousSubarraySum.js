var checkSubarraySum = function (nums, k) {
    let start = 0;
    let end = 1;
    let runningSum = nums[0] + nums[1];
    while (end < nums.length) {
        if (runningSum % k === 0) return true;

        if (start - end + 1 < 2) {
            end++;
            runningSum += nums[end];
        }

        // if (k % ru)
    }
};