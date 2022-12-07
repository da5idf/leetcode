var rangeSumBST = function (root, low, high) {
    let sum = 0;

    const dfs = node => {
        if (!node) return;
        if (node.val >= low && node.val <= high) sum += node.val;

        dfs(node.right);
        dfs(node.left);
    }

    dfs(root);
    return sum;
};