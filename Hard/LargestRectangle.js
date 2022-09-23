/***
 * In this algorithm, we don't calculate an area until we reach an index in heights
 * where heights[i] < heights[j] and j < i (a decrease in height, but increase in idx).
 * This is confusing at first, but is the key to the stack solution.
 * 
 * As an example, take heights = [1, 3, 4, 2, 5, 2]
 * We beging with an empty stack. This fails the while loop (stack.length).
 * Instead, we add to our stack the element [0, 1]
 *      this element denotes that at idx 0, we have heights[0] = 1
 * We continue adding to our stack until, heights[i] < height of element on top of stack.
 * We use the top of the stack because this is the element with max height up until this point.
 * stack = [[0, 1], [1, 3], [2, 4]] and newLeft = 3
 * 
 * Again, until this point (where a decrease happens), we have been increasing in height by design. 
 * Also, by design the first rectangle we calculate is for j = i - 1.
 * Notice how the width of the rectangle is
 *      width = i - j = i - (i - 1) = 1. 
 * The key here is that we do NOT do i - j + 1. Ex. 
 *      heights = [6, 2] => i = 1, j = i - 1 = 0. So width is i - j = 1 - 0 = 1
 * We have designed the problem to correct for 0 indexing.
 * 
 * Each time we calculate a rectangle, we  j and update the current idx's (i's)
 * leftBorder (newLeft) to be equal j.
 * Why? Because we know that given height[j] > height[i] the current height (height[i]) can 
 * span backwards, to the left up to and including index j. Ex
 *      heights = [1, 3, 3, 4, 5, 2, 0]. When i = 5, heights[i] = 2. 
 *      Note, we do NOT calculate 2's rectangle until i = 6. 
 *      HOWEVER, at this stage, rectangles for idexes 1, 2, 3, and 4 are calculated.
 *      At each index, we know that height[5] = 2 can span backward to these indexes. For instance
 *      at index 1, height = 3, so for height = 2, we know leftBorder = 1.
 *      leftBorder !== 0 because height[0] = 1 which is lower than 2.
 */

var largestRectangleArea = function (heights) {
    heights.push(0)
    let stack = [];
    let maxArea = 0;
    for (let rightBorder = 0; rightBorder < heights.length; rightBorder++) {
        let newLeft = rightBorder;
        while (stack.length && stack[stack.length - 1][1] > heights[rightBorder]) {
            const [leftBorder, height] = stack.pop();
            maxArea = Math.max(maxArea, (rightBorder - leftBorder) * height);
            newLeft = leftBorder;
        }
        stack.push([newLeft, heights[rightBorder]]);
    }
    return maxArea;
}


/*
Worst case n^2 time, so not great

var largestRectangleArea = function (heights) {

    var calculateArea = function (start, end) {
        if (start > end) return 0;

        let minIdx = start;
        for (let i = start; i <= end; i++) {
            if (heights[i] < heights[minIdx]) {
                minIdx = i;
            }
        }

        let currentLargest = heights[minIdx] * (end - start + 1)
        return Math.max(currentLargest, calculateArea(0, minIdx - 1), calculateArea(minIdx + 1, end))
    }
    return calculateArea(0, heights.length - 1)
}
*/