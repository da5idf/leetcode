var levelOrder = function (root) {
    if (!root) return root;

    let queue = [[root, 0]];
    let res = [];
    while (queue.length) {
        let [current, depth] = queue.shift();
        res[depth] = res[depth].push(current) || [current]

        if (current.left) queue.push([current.left, depth + 1]);
        if (current.right) queue.push([current.right, depth + 1]);
    }

    return res;
};