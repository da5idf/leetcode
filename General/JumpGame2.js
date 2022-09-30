// greedy approach
var jump = function (nums) {
    let jumpCount = 0
    while (i !== nums.length - 1) {
        jumpCount++;
        let jumpDist = nums[i];
        let largestJump = 0
        while (jumpDist > 0) {
            largestJump = Math.max(largestJump, nums[i + jumpDist])
            jumpDist--;
        }
        i += largestJump;
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