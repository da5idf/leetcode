var MinStack = function () {
    this.stack = [];
    this.min = null
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push([val, this.min]);
    if (this.min === null) this.min = val
    else this.min = Math.min(this.min, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const removed = this.stack.pop();
    if (this.min === removed[0]) this.min = removed[1]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min
};