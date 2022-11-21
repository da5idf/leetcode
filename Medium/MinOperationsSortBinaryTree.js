var minimumOperations = function (root) {
    if (!root) return 0;
    const queue = [root];
    let count = 0;
    while (queue.length) {
        let levelCount = queue.length;
        const level = [];
        for (let i = 0; i < levelCount; i++) {
            const current = queue.shift();
            level.push(current);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        count += getCount(level);
    }
    return count;
};

var getCount = function (arr) {
    const sorted = [...arr].sort((a, b) => a.val - b.val);
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] !== sorted[i]) {
            correctIdx = sorted.indexOf(arr[i]);
            let swap = arr[correctIdx];
            arr[correctIdx] = arr[i];
            arr[i] = swap;
            count++
        }
        else i++
    }
    return count;
}