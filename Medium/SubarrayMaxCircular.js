/*** one pass solution
*1
* In most cases you want to return the max between
*   maxSubArraySum vs max prefix + max suffix
* We create these two with
*   (max refix + max suffix) = sum - minSum
*   maxSubArraySum = maxSum
* But we must be careful of the case where all elements are < 0. In this case
* sum - minSum = 0
* In addition, 0 > maxSum 
* Specifically, maxSum will be equal to the least negative element in nums.
* We can't return an empty set so in this case, we return maxSum
*/
var maxSubarraySumCircular = function (nums) {
    let curMax = 0, curMin = 0, sum = 0, maxSum = nums[0], minSum = nums[0];
    for (const num of nums) {
        curMax = Math.max(curMax + num, num);
        maxSum = Math.max(maxSum, curMax);
        curMin = Math.min(curMin + num, num);
        minSum = Math.min(minSum, curMin);
        sum += num;
    }

    // *1
    return sum == minSum ? maxSum : Math.max(maxSum, sum - minSum);
};

// first solution with 2 passes
// rightMax keeps track of the max suffix sum to i's right.

var maxSubarraySumCircular = function (nums) {
    const LEN = nums.length
    let suffixSum = nums[LEN - 1];
    let rightMax = new Array(LEN).fill(nums[LEN - 1])
    for (let i = LEN - 2; i >= 0; i--) {
        suffixSum += nums[i]
        rightMax[i] = Math.max(rightMax[i + 1], suffixSum)
    }

    let max = nums[0];
    let prefixSum = nums[0];
    let specialMax = nums[0];
    let normalMax = nums[0]
    for (let i = 1; i < LEN; i++) {
        normalMax = Math.max(normalMax + nums[i], nums[i]);
        specialMax = Math.max(prefixSum + rightMax[i], specialMax);
        prefixSum += nums[i];
        max = Math.max(normalMax, specialMax, max);
    }

    return max;
};