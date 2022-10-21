const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

var kthSmallestProduct = function (nums1, nums2, k) {
    const minHeap = new MinPriorityQueue({ priority: x => x[0] * x[1] });
    const zeroIdx = find0Idx(nums1);
    const LEN2 = nums2.length;

    for (let i = 0; i < nums1.length; i++) {
        if (i <= zeroIdx) {
            console.log([nums1[i], nums2[LEN2 - 1], LEN2 - 1])
            minHeap.enqueue([nums1[i], nums2[LEN2 - 1], LEN2 - 1])
        } else {
            console.log([nums1[i], nums2[0], 0]);
            minHeap.enqueue([nums1[i], nums2[0], 0])
        }
    }

    let num1, num2, idx;
    while (k-- > 0) {
        [num1, num2, idx] = minHeap.dequeue().element;
        if (num1 <= 0 && idx > 0) {
            console.log([num1, nums2[idx - 1], idx - 1])
            minHeap.enqueue([num1, nums2[idx - 1], idx - 1]);
        } else if (num1 > 0 && idx < LEN2 - 1) {
            console.log([num1, nums2[idx + 1], idx + 1])
            minHeap.enqueue([num1, nums2[idx + 1], idx + 1]);
        }
    }
    return num1 * num2;
};

var find0Idx = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] < 0) left = mid;
        else if (nums[mid] > 0) right = mid - 1;
        else return mid;
    }
    return nums[left] <= 0 ? left : -1;
}

console.log(find0Idx([1, 2, 3, 4, 5]))