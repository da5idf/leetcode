var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    const foursomes = []
    for (let i = 0; i < nums.length - 3; i++) {
        if (nums[i] === nums[i - 1]) continue;
        const remainder = target - nums[i];
        const triplets = threeSum(nums, i + 1, remainder);
        for (const triplet of triplets) {
            foursomes.push([nums[i], ...triplet])
        }
    }
    return foursomes;
};

var threeSum = function (nums, start, target) {
    let size = nums.length;
    const triplets = []
    const seen = new Set();
    let low, hi;
    for (let i = start; i < size - 2; i++) {
        low = i + 1;
        hi = size - 1;
        while (low < hi) {
            let currentSum = nums[i] + nums[low] + nums[hi];

            if (currentSum === target && !seen.has(`${nums[i]},${nums[low]},${nums[hi]}`)) {
                triplets.push([nums[i], nums[low], nums[hi]]);
                seen.add(`${nums[i]},${nums[low]},${nums[hi]}`)
            }

            if (currentSum < target) {
                low++
            } else hi--;
        }
    }
    return triplets
}

let nums = [2, 2, 2, 2, 2], target = 8
console.log(fourSum(nums, target))