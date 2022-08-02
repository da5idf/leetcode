var productExceptSelf = function (nums) {
    let left = [1];
    let right = [1];

    for (let i = 1; i < nums.length; i++) {
        let j = nums.length - 1 - i;

        left.push(left[i - 1] * nums[i - 1]);
        right.unshift(right[0] * nums[j + 1])
    }

    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(left[i] * right[i])
    }
    return ans
}

let nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums));