var addOneRow = function (root, val, depth) {

    const queue = [[root, "left"]];
    let curDepth = 1;
    let prevLevel = []
    while (curDepth < depth) {
        let curLength = queue.length
        prevLevel = [...queue];
        for (let i = 0; i < curLength; i++) {
            let node = queue.shift()[0];
            if (node.left) queue.push([node.left, "left"]);
            if (node.right) queue.push([node.right, "right"]);
        }
        curDepth++
    }

    if (!prevLevel.length) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot
    } else {
        prevLevel.forEach(([node, direction]) => {

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