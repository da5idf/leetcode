var threeSum = function (nums) {

    let set = new Set();
    let result = []

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        let pairs = twoSum(nums, i + 1, -1 * x)

        let y, z;
        for (let pair of pairs) {
            y = nums[pair[0]];
            z = nums[pair[1]];
            let str = [x, y, z].sort((a, b) => a - b).join("");
            if (!set.has(str)) {
                result.push([x, y, z])
                set.add(str)
            }
        }
    }
    return result;
}

var twoSum = function (nums, start, target) {

    let map = {};
    let pairs = [];

    for (let i = start; i < nums.length; i++) {
        let curNum = nums[i];
        let match = target - curNum;

        if (map[match] && map[match] !== i) {
            pairs.push([map[match], i]);
        }

        else map[curNum] = i;
    }

    return pairs;
}

let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))