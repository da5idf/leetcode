var maximumSumScore = function (nums) {

    const leftSum = [0];

    for (let i = 0; i < nums.length; i++) {
        leftSum.push(leftSum[i] + nums[i]);
    }

    const totalSum = leftSum[leftSum.length - 1];
    let max = -Infinity;
    for (let i = 1; i < leftSum.length; i++) {
        max = Math.max(max, leftSum[i], totalSum - leftSum[i - 1])
    }

    return max;
};

/*
var maximumSumScore = function (nums) {

    let leftSum = [];
    let rightSum = [];

    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        leftSum[i] = (leftSum[i - 1] || 0) + nums[i];
        rightSum[j] = (rightSum[j + 1] || 0) + nums[j];
    }

    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, leftSum[i], rightSum[i])
    }

    return max;
};
*/