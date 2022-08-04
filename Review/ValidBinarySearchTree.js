var isValidBST = function (root, min = null, max = null) {
    if (!root) return true;

    // if the current node's values is not within the range, return false
    if (min !== null && root.val <= min) return false; // breaks the lower bound
    if (max !== null && root.val >= max) return false; // breaks the upper bound

    // evaluate the left and the right subtree
    return (
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    );
};
let tree1 = [120, 70, 140, 50, 100, 130, 160, 20, 55, 75, 110, 119, 135, 150, 200]
let tree2 = [32, 26, 47, 19, null, null, 56, null, 27]