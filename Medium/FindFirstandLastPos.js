var searchRange = function (nums, target) {

    let left = findLeftIdx(nums, target);
    let right = findRightIdx(nums, target);

    return [left, right]
}

var findLeftIdx = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let leftmost = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < target) low = mid + 1
        else if (nums[mid] > target) high = mid - 1;
        else {
            leftmost = mid;
            high = mid - 1;
        }
    }
    return leftmost
}

var findRightIdx = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let rightMost = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < target) low = mid + 1
        else if (nums[mid] > target) high = mid - 1;
        else {
            rightMost = mid;
            low = mid + 1;
        }
    }
    return rightMost
}

const nums = [5, 7, 7, 8, 8, 10]
console.log(findLeftIdx(nums, 8))