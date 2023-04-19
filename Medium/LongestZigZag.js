// dfs
var longestZigZag = function (root) {
    let max = 0;

    var dfs = function (node, arrivedFrom, length) {
        if (!node) return;
        else max = Math.max(max, length);

        if (arrivedFrom === 'right') {
            dfs(node.left, 'left', length + 1);
            dfs(node.right, 'right', 1)
        } else {
            dfs(node.right, 'right', length + 1);
            dfs(node.left, 'left', 1);
        }
    }

    dfs(root, 'right', 0)

    return max;
};


// bfs
var longestZigZag = function (root) {
    const queue = [[root, 0, 0]];
    let max = 0;
    while (queue.length) { //[[node, 1, 1], [node, 1, 2]]
        const [cur, left, right] = queue.shift();
        if (cur.left) queue.push([cur.left, 0, left + 1]);
        if (cur.right) queue.push([cur.right, right + 1, 0]);
        max = Math.max(max, left, right);
    }
    return max;
};