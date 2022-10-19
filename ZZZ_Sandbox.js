const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue');

const pq = new MinPriorityQueue(a => a[0]);

pq.enqueue([5, 9]);
pq.enqueue([0, 0]);

console.log(pq._heap);