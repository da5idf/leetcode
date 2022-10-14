var addOneRow = function (root, val, depth) {

    const queue = [root];
    let curDepth = 1;
    let prevLevel = []
    while (curDepth < depth) {
        let curLength = queue.length
        prevLevel = [...queue];
        for (let i = 0; i < curLength; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        curDepth++
    }

    if (!prevLevel.length) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot
    } else {
        prevLevel.forEach((node) => {

            const newLeft = new TreeNode(val)
            const curLeft = node.left;
            node.left = newLeft;
            newLeft.left = curLeft

            const newRight = new TreeNode(val)
            const curRight = node.right
            node.right = newRight;
            newRight.right = curRight

        })
        return root;
    }
};