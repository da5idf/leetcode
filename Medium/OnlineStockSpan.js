
var StockSpanner = function () {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let count = 1;
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
        count += this.stack.pop()[1];
    }
    this.stack.push([price, count])
    return count;
};
