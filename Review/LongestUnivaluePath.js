var longestUnivaluePath = function (root) {
    let longest = 0;

    var recurse = function (node) {

        if (!node) return [null, 0];

        let [rightVal, rightLen] = recurse(node.right)
        let [leftVal, leftLen] = recurse(node.left)

        if (rightVal === node.val) rightLen++
        else rightLen = 0;

        if (leftVal === node.val) leftLen++
        else leftLen = 0;

        const currentLength = rightLen + leftLen
        longest = Math.max(longest, currentLength);

        const longerSide = rightLen > leftLen ? rightLen : leftLen
        return [node.val, longerSide];
    }

    recurse(root);
    return longest;
};