var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    const map = {};

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && stack[stack.length - 1] < nums2[i])
            map[stack.pop()] = nums2[i];

        stack.push(nums2[i])
    }

    while (stack.length) map[stack.pop()] = -1;

    return nums1.map(el => map[el])
}