var sumNumbers = function (root) {

    function dfs(node, value) {
        if (!node) return 0;

        value = value * 10 + node.val;

        if (!node.left && !node.right) return value;

        return dfs(node.left, value) + dfs(node.right, value);
    }

    return dfs(root, 0)
}


// first solution
var sumNumbers = function (root) {
    let sum = 0;

    function dfs(node, value) {
        if (node.left) {
            dfs(node.left, value * 10 + node.left.val)
        }

        if (node.right) {
            dfs(node.right, value * 10 + node.right.val)
        }

        if (!node.left && !node.right) sum += value;
    }

    dfs(root, root.val);
    return sum;
};