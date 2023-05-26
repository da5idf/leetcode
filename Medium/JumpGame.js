// updated front to back solution 5/26/2023
// We initialize furthestIdx to 0
// at each step we check to see if we can reach
// the current idx i.e. i < furthestIdx.
// If we are able to reach idx i, then we can also
// reach any idx j s.t. j <= i + nums[i]
// if we reach the end of the loop it means 
// furthestIdx >= nums.length - 1 so we return true
var canJump = function (nums) {
    let furthestIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > furthestIdx) return false;

        furthestIdx = Math.max(furthestIdx, i + nums[i])
    }
    return true;
}

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