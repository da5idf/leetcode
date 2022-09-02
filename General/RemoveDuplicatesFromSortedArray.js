var removeDuplicates = function (nums) {
    let swapIdx = 1;
    let numCount = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            nums[swapIdx] = nums[i];
            swapIdx++;
            numCount++;
        }
    }

    return numCount
};