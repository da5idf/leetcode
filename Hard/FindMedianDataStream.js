var MedianFinder = function () {
    this.nums = []
    this.length = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    const nums = this.nums;
    const findIdx = (num) => {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);

            if (nums[mid] < num) left = mid + 1;
            else if (nums[mid] > num) right = mid - 1;
            else return mid;
        }
        return left;
    }

    const idx = findIdx(num);
    this.nums = [...nums.slice(0, idx), num, ...nums.slice(idx)]
    this.length++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const length = this.length;
    const idx = Math.floor(length / 2)
    if (length % 2 === 1) return this.nums[idx]
    else return (this.nums[idx] + this.nums[idx - 1]) / 2
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */