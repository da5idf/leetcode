var maxProduct = function (root) {

    const subtreeSums = [];
    const getTreeSums = node => {
        if (!node) return 0;
        const sum = node.val + getTreeSums(node.left) + getTreeSums(node.right);
        subtreeSums.push(sum);
        return sum;
    }
    const totalSum = getTreeSums(root);

    let max = 0;
    const LEN = subtreeSums.length;
    for (const sum of subtreeSums) {
        let pairProduct = sum * (totalSum - sum);
        max = Math.max(max, pairProduct);
    }

    return max % 1000000007;
};