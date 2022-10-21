var nextPermutation = function (nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;

    if (i >= 0) {
        let nextSmallestIdx = nums.length - 1;
        while (nums[nextSmallestIdx] <= nums[i]) nextSmallestIdx--;

        let temp = nums[i];
        nums[i] = nums[nextSmallestIdx];
        nums[nextSmallestIdx] = temp;

    }

    reverse(i + 1, nums);
};

var reverse = function (start, nums) {
    let swapIdx = nums.length - 1;
    for (let j = start; j < swapIdx; j++, swapIdx--) {
        let temp = nums[swapIdx];
        nums[swapIdx] = nums[j];
        nums[j] = temp;
    }
}
let nums = [7, 6, 5, 1, 2, 6, 4, 10, 6]

console.log(nextPermutation(nums))