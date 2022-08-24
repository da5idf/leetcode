var maxSubArray = function (nums) {
    let runningSum = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (runningSum < 0) {
            runningSum = nums[i];
        } else {
            runningSum += nums[i];
        }
        max = Math.max(max, runningSum);
    }

    return max;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5]
console.log(maxSubArray(nums)) // Output: 6