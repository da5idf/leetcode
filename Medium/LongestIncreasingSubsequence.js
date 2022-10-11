// complex solution from LeetCode combining
// intelligent sequencing and binary search
var lengthOfLIS = function (nums) {
    const subArray = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > subArray[subArray.length - 1]) subArray.push(nums[i])
        else {
            const replaceIdx = binarySearch(subArray, nums[i])
            subArray[replaceIdx] = nums[i]
        }
    }

    return subArray.length;
}

var binarySearch = function (array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2)
        if (array[mid] === target) return mid
        else if (array[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return left;
}


/*
var lengthOfLIS = function (nums) {

    const tracker = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (tracker[i] < tracker[j] + 1) {
                    tracker[i] = tracker[j] + 1;
                }
            }
        }
    }

    return Math.max(...tracker);
}
*/

const nums = [4, 10, 4, 3, 8, 9]
// console.log(lengthOfLIS(nums))

const arr = [1, 5, 6, 7, 8, 10, 11, 100, 101, 17]
console.log(binarySearch(arr, 9))