var threeSumClosest = function (nums, target) {
    let minDiff = Infinity;
    let size = nums.length;

    nums.sort((a, b) => a - b);
    let low, hi;
    for (let i = 0; i < size - 2; i++) {
        low = i + 1;
        hi = size - 1;
        while (low < hi && minDiff !== 0) {
            let currentSum = nums[i] + nums[low] + nums[hi];

            if (Math.abs(target - currentSum) < Math.abs(minDiff)) {
                minDiff = target - currentSum;
            }

            if (currentSum < target) {
                low++
            } else hi--;

        }
    }
    return target - minDiff
}

/* successful first implementation, but 5% speed score
var threeSumClosest = function (nums, target) {
    const results = {};
    let closest = Infinity;
    let negative = false;

    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        if (!results[remainder]) {
            results[remainder] = get2Sum(nums, i + 1, remainder)
        }
        if (results[remainder][0] === 0) return target;

        if (Math.abs(results[remainder][0] < closest)) {
            closest = Math.abs(results[remainder][0])
            negative = results[remainder][1]
        }
    }
    // console.log(results);
    return negative ?  target + closest : target - closest;
}

var get2Sum = function (nums, start, target) {
    let min = Infinity;
    let negative = false;

    for (let i = start; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [0, false]
            
            if (Math.abs(target - nums[i] - nums[j]) < min) {
                negative = target - nums[i] - nums[j] < 0
                min = Math.abs(target - nums[i] - nums[j]);
            }
        }
    }
    return [min, negative]
}
*/