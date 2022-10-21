// nice O(n) time set approach
var containsNearbyDuplicate = function (nums, k) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.size > k) set.delete(nums[i - k - 1]);
        if (set.has(nums[i])) return true;
        set.add(nums[i]);

        /*
        Alternate lines
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
        if (set.size > k) set.delete(nums[i - k]);
        */

    }
    return false;
}


// my naive approach
var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k && j < nums.length; j++) {
            if (nums[i] === nums[j]) return true
        }
    }
    return false
};