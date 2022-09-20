var threeSumClosest = function (nums, target) {
    const results = {};
    let closest = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (results[nums[i]]) {
            closest = Math.min(closest, nums[i]);
        } else {
            const remainder = target - nums[i];
            let temp = get2Sum(nums, skipIdx, remainder)
        }
    }
}

var get2Sum = function (nums, skipIdx, target) {
    let min = Infinity;
    const results = {};

    for (let i = 0; i < nums.length && i !== skipIdx; i++) {
        const current = nums[i];
        const match = target - current;
    }
}