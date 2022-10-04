// Morris Traversal
var preorderTraversal = function (root) {
  const traversal = [];
  let node = root;

  while (node !== null) {
    if (node.left === null) {
      traversal.push(node.val);
      node = node.right;
    }
    else {
      let predecessor = node.left;
      while ((predecessor.right !== null) && (predecessor.right !== node)) {
        predecessor = predecessor.right;
      }
      if (predecessor.right === null) {
        traversal.push(node.val);
        predecessor.right = node;
        node = node.left;
      }
      else {
        predecessor.right = null;
        node = node.right;
      }
    }
  }
  return traversal
}


/* recursive solution
var preorderTraversal = function (root) {
  if (!root) return [];

  const left = preorderTraversal(root.left);
  const right = preorderTraversal(root.right);

  return [root.val, ...left, ...right]
}
*/