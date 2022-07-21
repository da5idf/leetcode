// var maxSubArray = function (nums) {

//     let max = nums[0];
//     let runningSum = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         runningSum = Math.max(runningSum + nums[i], nums[i]);
//         max = Math.max(max, runningSum);
//     }
//     return max;
// };

var maxSubArray = function (nums) {

    let runningSums = [0, nums[0]];

    for (let i = 1; i < nums.length; i++) {
        runningSums[i + 1] = runningSums[i] + nums[i];
    }

    let max = runningSums[1];
    let startIdx = 0;
    for (let i = 1; i < runningSums.length; i++) {
        current = runningSums[i] - runningSums[startIdx];
        if (current < 0) {
            startIdx = i;
        }
        max = Math.max(max, current);
    }
    return max;
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))