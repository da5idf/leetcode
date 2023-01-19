/***
 * This is a follow up from Continuous Subarray Sum
 * 
 * Here, we keep track of the total number to times a 
 * specific remainder has been seen. Each time we come across
 * that remainder, we add it's occurance count to total count.
 * Then we increment it by 1.
 * 
 * We initialize remainderCounts[0] = 1 becuase this is the empty subArray.
 */

var subarraysDivByK = function (nums, k) {
    let prefixSum = 0;
    const LEN = nums.length
    const remainderCounts = new Array(k).fill(0);
    remainderCounts[0] = 1;
    let count = 0;
    for (let i = 0; i < LEN; i++) {
        // nums[i] % k might be negative.
        // We avoid negative remainders by adding k.
        // ex. -15 % 7 = -1 --> -1 + 7 = 6
        prefixSum = (prefixSum + nums[i] % k + k) % k;

        count += remainderCounts[prefixSum];
        remainderCounts[prefixSum]++;
    }

    return count;
};