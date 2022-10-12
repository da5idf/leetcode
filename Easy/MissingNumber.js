/***
 * XOR bit operator method
 * Note that
 *      5 ^ 5 = 0;
 * And Bit XOR operator is associative.
 *      5 ^ 3 ^ 5 = 5 ^ 5 ^ 3 = 3
 * So ex. [3, 0, 1]:
 *      missing = 3 (nums.length);
 *      3 ^= (0 ^ 3) = 0 
 *      1 ^= (1 ^ 0) = 1 
 *      1 ^= (2 ^ 1) = 2 which is our answer
 */
var missingNumber = function (nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing
};

/* clever Gaussian addition method
var missingNumber = function(nums) {
    let sum = nums.reduce((prev, curr) => prev + curr, 0);
    const totalSum = nums.length * (nums.length + 1) / 2
    
    return totalSum - sum;
};
*/

console.log(missingNumber([1, 1, 1, 6, 0]))