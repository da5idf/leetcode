var sortColors = function (nums) {

    let start = 0;
    let current = 0;
    let end = nums.length - 1;

    while (current <= end) {
        if (nums[current] === 0) {
            let temp = nums[start]
            nums[start] = 0;
            nums[current] = temp;
            start++;
            current++;
        }
        else if (nums[current] === 2) {
            let temp = nums[end];
            nums[end] = 2;
            nums[current] = temp;
            end--;
        }
        else current++
    }
};