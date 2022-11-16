var countNodes = function (root) {
    if (!root) return 0;

    const depth = getDepth(root); // 2

    let min = 0
    let max = 2 ** depth - 1
    while (min <= max) {
        const mid = ~~((min + max) / 2);
        if (nodeExists(root, mid, depth)) min = mid + 1;
        else max = mid - 1;
    }

    return 2 ** depth - 1 + min;
};

var getDepth = function (root) {
    if (!root.left) return 0;
    return 1 + getDepth(root.left);
}

var nodeExists = function (node, target, depth) {
    let min = 0
    let max = 2 ** depth - 1

    for (let i = 0; i < depth; i++) {
        let mid = ~~((min + max) / 2);
        if (target <= mid) {
            node = node.left;
            max = mid;
        } else {
            node = node.right;
            min = mid + 1;
        }
    }

    return node !== null;
}