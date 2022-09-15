// recursive
var isSymmetric = function (root) {
    return isMirror(root, root);
}

var isMirror = function (node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return (
        node1.val === node2.val &&
        isMirror(node1.left, node2.right) &&
        isMirror(node1.right, node2.left)
    )
}

/* first approach by level order traversal
var isSymmetric = function(root) {
    
    if (!root) return null
    const queue = [root];
    
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let current = queue.shift();
            if (!current) continue;
            queue.push(current.left);
            queue.push(current.right);
        }
        
        len = queue.length;
        if (len % 2 === 1) return false;
        for (let i = 0; i < len / 2; i++) {
            if (!queue[i] && !queue[len - i - 1]) continue
            else if (!queue[i] || !queue[len - i - 1]) return false;
            else if (queue[i].val !== queue[len - i - 1].val) return false;
        }
    }
    return true;
};
*/