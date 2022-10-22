var canJump = function (nums) {
    let farthestIdx = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= farthestIdx) {
            farthestIdx = i
        }
    }
    return farthestIdx === 0
}

var canJump = function (nums) {
    let current = -1, next = 0;
    for (let i = 0; i < nums.length && next < nums.length; i++) {
        if (i > current) {
            if (current > next) return false
            current = next;
        }
        next = Math.max(next, i + nums[i])
    }

    return true;
}

var canJump = function (nums) {
    const minJumpsRequired = {
        0: 0
    };

    for (let i = 0; i < nums.length; i++) {
        let curMinReq = minJumpsRequired[i]
        if (curMinReq === undefined) continue;

        for (let j = 1; j <= nums[i]; j++) {
            if (minJumpsRequired[i + j]) {
                minJumpsRequired[i + j] = Math.min(minJumpsRequired[i + j], curMinReq + 1);
            } else {
                minJumpsRequired[i + j] = curMinReq + 1
            }
        }
    }

    return minJumpsRequired[nums.length - 1] !== undefined
}