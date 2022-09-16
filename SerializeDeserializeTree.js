/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/

var serialize = function (root) {

    if (!root) return "null";
    const left = serialize(root.left); // 2,null,null // 4,null,null
    const right = serialize(root.right); // 5,null,null

    return `,${root.val},${left},${right}` // ,1,2,null,null,3,4,null,null,5,null,null

};


var deserialize = function (data) {
    const nodes = data.split(",");

    let idx = 0;
    let left, right;
    while (idx < nodes.length) {
        if (nodes[idx]) {
            const newNode = new TreeNode(Number(nodes[idx]))
            if (nodes[idx + 1]) newNode.left = new TreeNode(Number(nodes[idx + 1]))
            if (nodes[idx + 2]) right = new TreeNode(Number(nodes[idx + 2]))
        }
    }

    helper(nodes, 0);
};
