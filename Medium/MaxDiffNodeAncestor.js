var maxAncestorDiff = function (root) {
    let ans = 0;
    const getMax = (node, max = node.val, min = node.val) => {
        const val = node.val;
        if (val > max) {
            max = val;
            ans = Math.max(ans, Math.abs(max - min));
        }
        if (val < min) {
            min = val;
            ans = Math.max(ans, Math.abs(max - min));
        }

        if (node.left) getMax(node.left, max, min)
        if (node.right) getMax(node.right, max, min)

    }
    getMax(root)
    return ans;
};