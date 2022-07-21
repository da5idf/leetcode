var invertTree = function (root) {

    if (!root) return root;

    let newLeft = invertTree(root.right)
    let newRight = invertTree(root.left)

    root.right = newRight;
    root.left = newLeft;

    return root;
};