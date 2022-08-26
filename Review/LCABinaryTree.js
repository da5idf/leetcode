var lowestCommonAncestor = function (node, p, q) {
    if (!node) return false;
    if (node.val === p.val || node.val === q.val) return node;


    let foundLeft = lowestCommonAncestor(node.left, p, q);
    let foundRight = lowestCommonAncestor(node.right, p, q);

    if (foundRight && foundLeft) return node
    return foundRight || foundLeft

}

// returns [{-1, 0, 1}, int]
// -1 -> left, 0 is root, 1 -> right
// var getDirectionAndDistance = function (root, target) {
//     if (root.val === target.val) return 0

//     var search = function (root, target) {
//         let queue = [root];

//         while (queue.length) {
//             let curNode = queue.pop();
//             if (curNode.val === target.val) return 1
//             else {
//                 if (curNode.left) queue.push(curNode.left);
//                 if (curNode.right) queue.push(curNode.right);
//             }
//         }
//         return -1
//     }

//     if (root.right) {
//         return search(root.right, target);    
//     } else return -1
// }

// var lowestCommonAncestor = function (root, p, q) {

//     let dirP = getDirectionAndDistance(root, p);
//     let dirQ = getDirectionAndDistance(root, q);

//     if (dirP * dirQ <= 0) return root
//     else if (dirP === 1) {
//         return lowestCommonAncestor(root.right, p, q);
//     } else {
//         return lowestCommonAncestor(root.left, p, q);
//     }
// };