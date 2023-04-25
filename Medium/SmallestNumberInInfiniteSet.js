SmallestInfiniteSet.prototype.popSmallest = function () {
    if (!this.minHeap.isEmpty()) {
        const num = this.minHeap.dequeue();
        this.addedBack.delete(num);
        return num;
    }
    else return this.currentInt++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    if (this.currentInt <= num || this.addedBack.has(num)) return

    this.addedBack.add(num);
    this.minHeap.add(num);
};

class MinPQ {
    constructor() {
        this.queue = []
    };

    add(num) {
        this.queue.push(num);
        this.queue.sort((a, b) => a - b);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
