var leafSimilar = function (root1, root2) {
    let seq1 = []
    let seq2 = []
    getLeafSeq(root1, seq1);
    getLeafSeq(root2, seq2);

    if (seq1.length !== seq2.length) return false;

    for (let i = 0; i < seq1.length; i++) {
        if (seq1[i] !== seq2[i]) return false;
    }

    return true;
};

var getLeafSeq = function (root, seq) {
    if (!root.left && !root.right) seq.push(root.val);
    if (root.left) getLeafSeq(root.left, seq);
    if (root.right) getLeafSeq(root.right, seq);
}