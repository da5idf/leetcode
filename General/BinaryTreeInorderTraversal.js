var inorderTraversal = function (root) {

    const traversal = []

    var recurse = function (node) {
        if (node !== null) {
            recurse(node.left)
            traversal.push(node.val);
            recurse(node.right);
        }
    }

    recurse(root);
    return traversal
}


/* first approach
var inorderTraversal = function(root) {
    
    if (!root) return [];
    
    const left = inorderTraversal(root.left);
    const right = inorderTraversal(root.right);
    
    return [...left, root.val, ...right]
};
*/