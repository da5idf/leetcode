var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        while (left <= right && nums[left] === nums[left + 1]) left++
        while (left <= right && nums[right] === nums[right - 1]) right--

        let mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) return true

        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (target > nums[mid] && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }

    return false
}