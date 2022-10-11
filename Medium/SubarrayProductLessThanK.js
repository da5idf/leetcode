var numSubarrayProductLessThanK = function (nums, k) {
    /**
     * if k = 1 then subArrCount = 0 because we are looking for 
     * products strictly less than k. By filtering out k <= 1 
     * inputs, we enable our algorithm to divide numbers by themselves
     * If not, then line 20 won't exit out of the while loop when 
     * start = end 
     * 
     */
    if (k <= 1) return 0

    let start = 0;
    let end = 0;
    let subArrCount = 0;
    let runningProduct = 1;

    while (end < nums.length) {
        runningProduct *= nums[end]
        while (runningProduct >= k) {
            runningProduct /= nums[start];
            start++;
        }
        subArrCount += end - start + 1;
        end++;
    }

    return subArrCount;
}


/*
var numSubarrayProductLessThanK = function (nums, k) {
    let start = 0;
    let end = 0;
    let subArrCount = 0;
    let runningProduct = 1;
    let range = 0;

    while (end < nums.length) {
        runningProduct *= nums[end]
        range++;
        if (runningProduct < k) {
            end++;
        } else {
            while (runningProduct >= k) {
                runningProduct /= nums[start];
                range--;
                start++;
            }
        }
        subArrCount += range;
    }

    return subArrCount;
}
*/