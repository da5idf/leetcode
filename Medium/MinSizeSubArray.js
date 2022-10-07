var minSubArrayLen = function (target, nums) {
    let start = 0;
    let end = 0;
    let runningSum = 0;
    let minLength = 100001

    while (end < nums.length) {
        runningSum += nums[end];
        while (runningSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            runningSum -= nums[start];
            start++;
        }
        end++;
    }
    return minLength < 100001 ? minLength : 0;
};