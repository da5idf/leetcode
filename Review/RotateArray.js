// rotate
var rotate = function (nums, k) {
    const length = nums.length
    k %= length // in case k is larger than nums
    reverseArray(nums, 0, length - 1); // reverse the whole array.
    reverseArray(nums, 0, k - 1); // reverse the first k elements
    return reverseArray(nums, k, length - 1); // reverse the remaining elements;
}

var reverseArray = function (arr, start, end) {
    let num1, num2;
    while (start < end) {
        num1 = arr[start];
        num2 = arr[end];
        arr[end] = num1;
        arr[start] = num2;
        start++;
        end--;
    }
    return arr;
}

// cyclic replacement
var rotate = function (nums, k) {
    const length = nums.length;
    k %= length;
    let count = 0;
    let current, previous, temp, next;
    for (let start = 0; count < length; start++) {
        current = start;
        previous = nums[start];
        do {
            next = (current + k) % length
            temp = nums[next];
            nums[next] = previous;
            previous = temp;
            current = next;
            count++;
        } while (start < current)
    }
    return nums;
}

// brute force
// var rotate = function(nums, k) {
//     k %= nums.length;
//     let temp, previous;
//     for (let i = 0; i < k; i++) {
//         previous = nums[nums.length - 1];
//         for (let j = 0; j < nums.length; j++) {
//             temp = nums[j];
//             nums[j] = previous;
//             previous = temp;
//         }
//     }
// };