const { MinPriorityQueue } = require("@datastructures-js/priority-queue")

var kthSmallest = function (matrix, k) {
    let minHeap = new MinPriorityQueue({ priority: x => x[0] })
    const ROWS = matrix.length;
    for (let row = 0; row < ROWS; row++) {
        minHeap.enqueue(matrix[row])
    }

    let num;
    while (k !== 0) {
        let element = minHeap.dequeue().element;
        num = element.shift();
        if (element.length) minHeap.enqueue(element);
        k--;
    }
    return num;
}