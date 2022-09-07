var maxArea = function (height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let span = right - left;
        let containerHeight = Math.min(height[left], height[right])

        max = Math.max(max, containerHeight * span);

        height[left] < height[right] ? left++ : right--;
    }
    return max
};