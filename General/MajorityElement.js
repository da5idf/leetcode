var majorityElement = function (nums) {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1
        if (map[nums[i]] >= Math.ceil(nums.length / 2)) return nums[i]
    }
};

nums = [3, 2, 3]

console.log(majorityElement(nums));