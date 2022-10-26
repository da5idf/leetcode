var subarrySum = function (nums, k) {
    let start = 0;
    let end = 0;
    let runningSum = nums[0];
    let count = 0;
    while (end < nums.length) {
        if (runningSum === k) {
            count++;
            end++;
            runningSum += nums[end];
        }
        if (start === end) {
            end++;
            runningSum += nums[end];
        }
        else if (runningSum < k) {

        }
    }
}