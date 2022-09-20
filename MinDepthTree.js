var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

var minDepth = function (root) {

    if (!root) return 0;

    const queue = [root];
    let depth = 0;
    while (queue.length) {
        let length = queue.length;
        depth++;
        for (let i = 0; i < length; i++) {
            let current = queue.shift();
            if (!current.left && !current.right) return depth
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
    }

};