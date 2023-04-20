/***
 * The key here was to recognize that the pos of a node's left and right
 * children are 2x and 2x + 1 that of the parent node's position.
 * 
 * Importantly, pos also refers to the idx of that node at that depth instead of
 * the total position number. For instance, for root [1, 2, 3], 3 has pos = 1
 *      where depth 1 is [2, 3] with indeces [0, 1]
 * In this way, when moving to a child left or right, we can still simply take the
 *      parent node's pos and multiply by 2. We add an additional 1 if moving right.
 * 
 *               [0]
 *              [0, 1]     ->   [0 * 2 , 0 * 2 + 1]
 *           [0, 1, 2, 3]  ->   [0 * 2, 0 * 2 + 1, 1 * 2, 1 * 2 + 1]
 */

var widthOfBinaryTree = function (root) {
    let max = 1;
    let minPos = [0];

    function dfs(node, depth, pos) {
        if (!node) return;
        if (minPos[depth] === undefined) minPos[depth] = pos;

        const diff = pos - minPos[depth];
        max = Math.max(max, diff + 1)

        dfs(node.left, depth + 1, diff * 2)
        dfs(node.right, depth + 1, diff * 2 + 1)
    }
    dfs(root, 0, 0);
    return max;
}

// With BFS we run into an overflow issue so we have to use BigInt with 'n'
var widthOfBinaryTree = function (root) {
    const queue = [[root, 1n]];
    let max = 1;
    while (queue.length) {
        const curLen = queue.length;
        for (let i = 0; i < curLen; i++) {
            const [node, pos] = queue.shift();
            if (node.left) queue.push([node.left, pos * 2n]);
            if (node.right) queue.push([node.right, pos * 2n + 1n]);
        }
        if (queue.length > 1) {
            const curWidth = queue[queue.length - 1][1] - queue[0][1] + 1n
            max = max < curWidth ? curWidth : max;
        }
    }

    return max;
};

// bfs corrected for BigInt which was the fastest implementation
var widthOfBinaryTree = function (root) {
    const queue = [[root, 1]];
    const minPos = [];
    let max = 1;
    while (queue.length) {
        const curLen = queue.length;
        const depth = minPos.length;
        for (let i = 0; i < curLen; i++) {
            const [node, pos] = queue.shift();
            if (minPos[depth] === undefined) minPos[depth] = pos;

            const diff = pos - minPos[depth];
            max = Math.max(max, diff + 1);

            if (node.left) queue.push([node.left, diff * 2]);
            if (node.right) queue.push([node.right, diff * 2 + 1]);
        }
    }
    return max;
};