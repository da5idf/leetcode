var searchInsert = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left
};

// var searchInsert = function (nums, target) {

//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         let rightIdx = Math.floor((start + end) / 2);
//         let leftIdx = rightIdx - 1;

//         if (nums[rightIdx] === target) return rightIdx;
//         else if (leftIdx >= 0 && nums[leftIdx] < target && nums[rightIdx] > target) {
//             return rightIdx
//         } else if (nums[rightIdx] < target) {
//             start = rightIdx + 1;
//         } else {
//             end = rightIdx - 1;
//         }
//     }
    
//     return start > end ? start : end
// };