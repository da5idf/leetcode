/***
 * This problem relies on the following:
 *      First, define a prefix sum s.t. prefixSum[i] = sum of all elements 0 - i
 *      Next, if for indices i and j prefixSum[i] % k = prefixSum[j] % k
 *          then the subarry from i + 1 to j is divisible by k.
 *      In other words, as we create a runningSum of the elements in nums
 *          we can keep track of the runningSum % k.
 *      If there exist two indices where runningSum % k = c then the subarry
 *          between these two elements must sum to k.
 *      For example, if k = 7 and we have the following arr:
 *          [... 4, ... 18, ...] let  nums[i] = 4, nums[j] = 18.
 *          if prefixSum[i] = prefixSum[j] then everything
 *          after 4 and up to and including 18 must
 *          be some multiple of 7.  
 */

var checkSubarraySum = function (nums, k) {
    const remainders = new Set();
    let prefixSum = 0;
    let runningSum = 0;
    for (const num of nums) {
        runningSum = (runningSum + num) % k;

        if (remainders.has(runningSum)) return true;

        remainders.add(prefixSum);

        prefixSum = runningSum;
    }

    return false;
};