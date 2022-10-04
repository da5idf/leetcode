var postorderTraversal = function (root) {

    if (!root) return [];

    const stack = [root];
    const traversal = [];
    // const visited = new Set(); use this to maintain tree structure

    while (stack.length) {
        let node = stack[stack.length - 1];
        // if (node.left && !visited.has(node.left)) {
        if (node.left) {
            stack.push(node.left)
            // visited.add(node.left);
            node.left = null;
        }
        // else if (node.right && !visited.has(node.right)) {
        else if (node.right) {
            stack.push(node.right);
            // visited.add(node.right);
            node.right = null;
        }
        else {
            traversal.push(stack.pop().val);
            // node = stack[stack.length - 1];
        }
    }
    return traversal;
}


/* recursive solution
var postorderTraversal = function (root) {
    if (!root) return [];

    const left = postorderTraversal(root.left);
    const right = postorderTraversal(root.right);

    return [...left, ...right, root.val]
}
*/