var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let totalCaptured = 0;
    let leftMax = height[left];
    let rightMax = height[right];

    while (left < right) {
        console.log(totalCaptured, left, right);
        if (height[left] < height[right]) {
            totalCaptured += leftMax - height[left];
            left++;
            leftMax = Math.max(leftMax, height[left])
        } else {
            totalCaptured += rightMax - height[right];
            right--;
            rightMax = Math.max(rightMax, height[right])
        }
    }
    return totalCaptured;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(height))