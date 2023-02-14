var getMinDistance = function (nums, target, start) {
    let up = start;
    let down = start - 1;
    while (nums[up] !== target && nums[down] !== target) {
        up++;
        down--;
    }

    return nums[up] === target ? up - start : up - start + 1;
};