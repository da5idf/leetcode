/***
 * I didn't get this one. It's a tricky solution that leverages the prfix sum.
 * Visualize it starting with a simple case: 
 *      [3, 7] -> [5, 5] answer = 5 = prefix sum average = (prefix sum) / (i + 1) = 10 / 2
 *      [7, 3] -> [7, 3] answer = 7 in this case, of course, but how does it map out in the algorithm.
 *          well, when i = 0, ans gets updated to 7. When we add 3, the prefix sum average is 5,
 *          but 7 > 5 so ans remains 7.
 * 
 * Essentially, we only update ans if by adding nums[i] we obtain an average prefix sum larger than
 *  one we have seen already. A new largest average prefix sum.
 *  What this means is that nums[i] is large enough that it's 'weight' can be distributed to indecies < i.
 * 
 * If you ignore for a second the direction of flow, it's easy to see what the highest column will be:
 *  Math.ceil(prefix sum / nums.length) because like water, everything will 'even out'
 * What's different here is that we can only go left. We correct for the equation above in the construction
 *  of ans = Math.max(ans, Math.ceil(sum / (i + 1)))
 * In any monotonically decreasing array, ans does not get updated. In otherwords, a tall colun on the left won't
 *  be able to flow right and thus ans will not get updated as i goes up.
 * 
 */

var minimizeArrayValue = function (nums) {
    let ans = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        ans = Math.max(ans, Math.ceil(sum / (i + 1)));
    }
    return ans
};