var levelOrderBottom = function (root) {
    if (!root) return []

    const bottomOrderTraversal = [];
    const queue = [root];
    while (queue.length) {
        const numInLevel = queue.length;
        const level = new Array(numInLevel);
        for (let i = 0; i < numInLevel; i++) {
            node = queue.shift();
            level[i] = node;
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        bottomOrderTraversal.unshift(level)
    }
    return bottomOrderTraversal
}