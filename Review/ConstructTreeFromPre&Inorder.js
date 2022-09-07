var buildTree = function (preorder, inorder) {
    const LEN = preorder.length;
    let inIdxMap = {}

    for (let i = 0; i < LEN; i++) {
        inIdxMap[inorder[i]] = i
    }

    let prePointer = 0;

    var arrayToTree = function (preorder, left, right) {
        if (left > right) return null;

        const rootVal = preorder[prePointer++];
        const rootNode = new TreeNode(rootVal);

        const inOrderRootIdx = inIdxMap[rootVal];
        rootNode.left = arrayToTree(preorder, left, inOrderRootIdx - 1);
        rootNode.right = arrayToTree(preorder, inOrderRootIdx + 1, right);

        return rootNode;
    }

    return arrayToTree(preorder, 0, LEN - 1)
};