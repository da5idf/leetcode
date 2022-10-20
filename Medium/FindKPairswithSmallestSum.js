const { MinPriorityQueue } = require("@datastructures-js/priority-queue")

var kSmallestPairs = function (nums1, nums2, k) {
    let minHeap = new MinPriorityQueue({ priority: x => x[0] + x[1] })

    for (let i = 0; i < nums1.length && i < k; i++) {
        // minHeap[i] = [num1, num2, idx of num2]
        minHeap.enqueue([nums1[i], nums2[0], 0])
    }

    let smallestSums = [];
    while (k > 0 && !minHeap.isEmpty()) {
        let element = minHeap.dequeue().element;
        smallestSums.push([element[0], element[1]]);

        let num2Idx = element[2]
        if (num2Idx < nums2.length - 1) {
            minHeap.enqueue([element[0], nums2[num2Idx + 1], num2Idx + 1])
        }

        k--
    }
    return smallestSums;
}