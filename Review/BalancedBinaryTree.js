var isBalanced = function (root) {
    if (!root) return true;

    const right = getMaxDepth(root.right) + 1;
    const left = getMaxDepth(root.left) + 1;

    return (Math.abs(right - left) <= 1) && isBalanced(root.left) && isBalanced(root.right)

};

var getMaxDepth = function (root) {
    if (!root) return 0;

    return Math.max(getMaxDepth(root.right), getMaxDepth(root.left)) + 1;
}