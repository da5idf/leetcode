const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

// sorted buckets
var smallestDistancePair = function (nums, k) {
    const LEN = nums.length;
    nums.sort((a, b) => a - b);

    const maxDistance = nums[LEN - 1] - nums[0]
    const distanceBuckets = new Array(maxDistance + 1).fill(0);
    for (let i = 1; i < LEN; i++) {
        for (let j = 0; j < i; j++) {
            let distance = nums[i] - nums[j];
            distanceBuckets[distance]++;
        }
    }

    let i = 0;
    while (k > 0) {
        k -= distanceBuckets[i++]
    }

    return i - 1;
}

/* Time Limit Exceeded
var smallestDistancePair = function (nums, k) {
    const LEN = nums.length
    nums.sort((a, b) => a - b);
    const minHeap = new MinPriorityQueue({ priority: x => x[0] });

    for (let i = 0; i < LEN - 1; i++) {
        let distance = nums[i + 1] - nums[i]
        minHeap.enqueue([distance, i, i + 1])
    }

    let distance, idx1, idx2;
    while (k-- > 0) {
        [distance, idx1, idx2] = minHeap.dequeue().element;
        if (idx2 < LEN - 1) {
            let newDistance = nums[idx2 + 1] - nums[idx1]
            minHeap.enqueue([newDistance, idx1, idx2 + 1])
        }
    }

    return distance
};
*/