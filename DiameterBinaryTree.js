var diameterOfBinaryTree = function (root) {

    let stack = [root];
    let max = 0;

    while (stack.length) {
        let current = stack.pop();

        let right = getMaxDepth(current.right)
        let left = getMaxDepth(current.left)

        max = Math.max(max, right + left);

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }

};

var getMaxDepth = function (root) {
    if (!root) return 0;

    return Math.max(getMaxDepth(root.right), getMaxDepth(root.left)) + 1;
}