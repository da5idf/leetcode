var firstMissingPositive = function (nums) {
    let foundOne = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) foundOne = true;
        else if (nums[i] < 1) nums[i] = 1;
    }

    if (!foundOne) return 1;

    for (let i = 0; i < nums.length; i++) {
        const curNum = Math.abs(nums[i])
        if (curNum <= nums.length) {
            nums[curNum - 1] *= -1
        }

    }
    console.log(nums);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > 0) return i + 1
    }

    return nums.length + 1
}