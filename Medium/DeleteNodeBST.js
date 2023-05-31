/*
A great combination of BST and recursion techniques.
There are 4 cases to consider:
    1. We are deleting a leaf
    2. We are deleting a node with only a left child
    3. We are deleting a node with only a right child
    4 We are deleting a node with two children -- defaults to case 2

Solution for each case:
    1. We set that node = null (no other changes necessary! hooray)
    Before we explain 2, 3 and 4, let's describe what the two helper functions do:
        successor: finds the smallest node in the right sub-tree (largest node after the current one)
        predecessor: finds the largest node in the left sub-tree (smallest node before the current one)
    2. In this case, we need to replace the value of the node to delete with its successor node.
            once we find the predecessor node, we have to delete that one though!
            So we call deleteNode again, but this time we pass in the node.left and predecessor node val.
    3. The opposite is true for when the node only has a node.right
            We find the successor node and then pass that node into the deleteNode function.
    4. We can use the same logic as for part 2.
*/

const successor = (node) => {
    node = node.right;
    while (node.left) {
        node = node.left;
    }
    return node.val;
};

const predecessor = (node) => {
    node = node.left;
    while (node.right) {
        node = node.right;
    }
    return node.val;
};

var deleteNode = function (root, key) {
    if (!root) {
        return null;
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.left) {
        root.val = predecessor(root);
        root.left = deleteNode(root.left, root.val);
    } else if (root.right) {
        root.val = successor(root);
        root.right = deleteNode(root.right, root.val);
    } else {
        root = null;
    }
    return root;
};