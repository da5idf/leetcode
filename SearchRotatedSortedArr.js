var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let pivot = start + Math.floor((end - start) / 2);
        if (nums[pivot] === target) return pivot;

        else if (nums[pivot] >= nums[start]) {
            if (target >= nums[start] && target < nums[pivot]) end = pivot - 1;
            else start = pivot + 1
        } else {
            if (target <= nums[end] && target > nums[pivot]) start = pivot + 1;
            else end = pivot - 1;
        }
    }
    return - 1;
};


let nums = [4, 5, 6, 7, 0, 1, 2], target = 0

console.log(search(nums, target));