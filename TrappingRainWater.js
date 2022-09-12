var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalCaptured = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (leftMax < rightMax) {
            totalCaptured += Math.max(0, leftMax - height[left]);
            left++;
        } else {
            totalCaptured += Math.max(0, rightMax - height[right])
            right--;
        }
    }
    return totalCaptured;
}

/* first solution
var trap = function (height) {
    const width = height.length;
    const leftCapture = new Array(width);
    const rightCapture = new Array(width);
    let location = 0;

    let containerHeight = height[location]
    while (location < height.length) {
        if (height[location] > containerHeight) {
            leftCapture[location] = 0
            containerHeight = height[location];
        } else {
            leftCapture[location] = containerHeight - height[location]
        }
        location++;
    }

    location = height.length - 1;
    containerHeight = height[location];
    while (location >= 0) {
        if (height[location] > containerHeight) {
            rightCapture[location] = 0;
            containerHeight = height[location];
        } else {
            rightCapture[location] = containerHeight - height[location];
        }
        location--
    }

    let totalCapture = 0;
    for (let i = 0; i < width; i++) {
        totalCapture += Math.min(leftCapture[i], rightCapture[i])
    }
    return totalCapture;
};
*/

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(height))