var maxPathSum = function (root) {

    let max = -Infinity;
    const maxFinder = node => {
        if (!node) return 0;

        const leftPath = maxFinder(node.left);
        const rightPath = maxFinder(node.right);
        const thisVal = node.val;

        const vertexPath = thisVal + leftPath + rightPath;
        const ignoreOneSide = thisVal + Math.max(leftPath, rightPath);

        max = Math.max(vertexPath, ignoreOneSide, thisVal, max);

        return Math.max(ignoreOneSide, thisVal)
    }
    maxFinder(root);
    return max;
};