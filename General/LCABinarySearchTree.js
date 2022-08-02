var lowestCommonAncestor = function (root, p, q) {

    let big = p.val > q.val ? p : q;
    let small = p.val > q.val ? q : p;

    if (root.val === big.val) return big;
    if (root.val === small.val) return small;

    if (root.val < big.val && root.val > small.val) {
        return root;
    } else if (root.val < big.val && root.val < small.val) {
        return lowestCommonAncestor(root.right, big, small)
    } else {
        return lowestCommonAncestor(root.left, big, small)
    }
};