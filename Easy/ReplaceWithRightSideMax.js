var replaceElements = function (arr) {
    let curMax = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let num = arr[i];
        arr[i] = curMax;
        curMax = Math.max(num, curMax)
    }
    return arr
};