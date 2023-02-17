/***
 * This is an in order traversal problem.
 *  In order traversals traverse the nodes in order of value.
 * 
 *  Prev is set up so that it is always the node
 *  one smaller than the current node.
 * 
 *  Prev needs to be global 
 *      This way it updates parent nodes' function calls.
 *      This ensures a leaf will become a parent node's prev
 */

var minDiffInBST = function (root) {
    let minDiff = 100001
    let prev = null
    var inOrderTraversal = function (node) {
        if (!node) return
        inOrderTraversal(node.left);
        if (prev) minDiff = Math.min(minDiff, node.val - prev.val);
        prev = node;
        inOrderTraversal(node.right);
    }

    inOrderTraversal(root)
    return minDiff
};