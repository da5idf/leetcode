// I found a different greedy approach I like better:
var jump = function (nums) {
    const n = nums.length;
    let i = 0, maxReachable = 0, lastJumpedPos = 0, jumps = 0;
    while (lastJumpedPos < n - 1) {
        maxReachable = Math.max(maxReachable, i + nums[i]);
        if (i === lastJumpedPos) {// current level has been iterated & maxReachable position on next level has been finalised
            lastJumpedPos = maxReachable;     // so just move to that maxReachable position
            jumps++;                          // and increment the level
            // NOTE: jump^ only gets updated after we iterate all possible jumps from previous level
            //       This ensures jumps will only store minimum jump required to reach lastJumpedPos
        }
        i++;
    }
    return jumps;
}

// greedy approach
var jump = function (nums) {
    let jumpCount = 0, current = -1, next = 0;
    for (let i = 0; next < nums.length - 1; i++) {
        if (i > current) {
            jumpCount++;
            current = next;
        }
        next = Math.max(next, i + nums[i])
    }
    return jumpCount
}

/* my solution
var jump = function(nums) {
    let len = nums.length
    const jumps = new Array(len).fill(0);
    
    for (let i = 0; i < len; i++) { 
        let dist = nums[i]; 
        while (dist > 0) {
            let currentJump = jumps[i + dist];
            if (currentJump) {
                jumps[i + dist] = Math.min(jumps[i] + 1, currentJump)
            } else {
                jumps[i + dist] = jumps[i] + 1
            }
            dist--;
        }
    }
    return jumps[len - 1]
};
*/