var pivotIndex = function (nums) {

    let sum = 0;
    for (let x of nums) sum += x;

    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - nums[i] - leftSum) return i;
        leftSum += nums[i]
    }

    return -1;
}

let nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums));