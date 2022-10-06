var zigzagLevelOrder = function (root) {
    if (!root) return [];

    const traversal = [];
    const queue = [root]
    let depth = -1;
    let direction = 1;
    while (queue.length) {
        depth++;
        let currentQueueLength = queue.length;
        let level = new Array(currentQueueLength);
        for (let i = 0; i < currentQueueLength; i++) {
            let currentNode = queue.shift();
            // add to this level
            let insertIdx = (direction > 0) ? i : currentQueueLength - 1 - i;
            level[insertIdx] = currentNode.val;

            // add child nodes to queue
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        traversal.push(level);
        direction *= -1;
    }
    return traversal;
};