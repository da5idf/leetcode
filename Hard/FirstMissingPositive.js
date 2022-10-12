// alternate method
var firstMissingPositive = function (nums) {

    // largetst possible missing number is nums.length.
    // to give a nums.length idx, push an additional 0 into nums.
    nums.push(0);
    const LEN = nums.length;

    // we need to ignore all negative numbers AND nums >= new length
    for (let i = 0; i < LEN; i++) {
        if (nums[i] < 0 || nums[i] >= LEN) {
            nums[i] = 0;
        }
    }

    // now each num in nums satisfies 0 <= num < LEN
    // let each num serve as an idx.
    // when we reach say nums[9] = 4 we go to nums[4] and add LEN
    // nums[4] also satisfies line 16. So now it will be AT LEAST LEN
    // in other words, each idx in nums will be greater than LEN if 
    // that number was seen in LEN
    // We take nums[i] % LEN so that we get the original number before
    // we added anyhing to it during this loop.
    for (let i = 0; i < LEN; i++) {
        nums[nums[i] % LEN] += LEN
    }

    for (let i = 1; i < LEN; i++) {
        if (nums[i] / LEN < 1) return i
    }

    return LEN
}

/*
var firstMissingPositive = function (nums) {
    let foundOne = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) foundOne = true;
        else if (nums[i] < 1) nums[i] = 1;
    }

    if (!foundOne) return 1;

    for (let i = 0; i < nums.length; i++) {
        const curNum = Math.abs(nums[i])
        if (curNum <= nums.length) {
            nums[curNum - 1] *= -1
        }

    }
    console.log(nums);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > 0) return i + 1
    }

    return nums.length + 1
}
*/