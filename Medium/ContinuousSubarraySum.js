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