var subarraySum = function (nums, k) {
    const prefixSumMap = { 0: 1 };
    let prefixSum = 0;
    let totalPairs = 0;

    for (const num of nums) {
        prefixSum += num;

        const target = prefixSum - k;
        const targetCount = prefixSumMap[target] || 0;

        prefixSumMap[prefixSum] = (prefixSumMap[prefixSum] || 0) + 1;

        totalPairs += targetCount;
    }

    return totalPairs
}