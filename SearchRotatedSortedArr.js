var search = function (nums, target) {
    let left = nums[0];
    let right = nums[nums.length - 1];

    let pivot = Math.floor(nums.length / 2)
    return helper(nums, pivot, left, right, target)
};

var helper = function (nums, pivot, left, right, target) {
    if (target === nums[pivot]) return pivot;

    if (target < nums[pivot] && target < right) {
        pivot = Math.floor((nums.length - pivot) / 2)
    } else {
        pivot = Math.floor(pivot / 2)
    }
    return helper(nums, pivot, left, right, target)
}

let nums = [4, 5, 6, 7, 0, 1, 2], target = 0

console.log(search(nums, target));