/*
This is the same method as my solution, but it manipulates the Class structure.
This is technically poor code and would not even compile with proper typechecking
and Class variable protections. It also ran slower than my original solution.
*/
var distanceK = function (root, target, k) {
    addParent(root, null)

    let ans = [];
    findNodesKFromTarget(target, 0, k, new Set(), ans)
    return ans
}

function addParent(node, prev) {
    if (!node) return;
    node.parent = prev;
    addParent(node.left, node)
    addParent(node.right, node)
}

function findNodesKFromTarget(node, depth, distance, visited, ans) {
    if (!node || visited.has(node.val)) return;
    visited.add(node.val);
    if (depth === distance) return ans.push(node.val);
    findNodesKFromTarget(node.left, depth + 1, distance, visited, ans)
    findNodesKFromTarget(node.right, depth + 1, distance, visited, ans)
    findNodesKFromTarget(node.parent, depth + 1, distance, visited, ans)
}


/*
This was my first solution. First we create an undirected graph from the Binary Tree
Next, we traverse the tree starting from the target node. When we reach the correct
distance, we add the value to ans. We just need to be sure we don't cycle by 
checking the value of neighbor to the value of previous.
*/
var distanceK = function (root, target, k) {
    const graph = { [root.val]: [] };
    if (root.left) graph[root.val].push(root.left.val);
    if (root.right) graph[root.val].push(root.right.val);

    traverseTree(root.left, root, graph)
    traverseTree(root.right, root, graph)

    let ans = [];
    findNodesKFromTarget(target.val, null, 0, k, graph, ans)
    return ans
}

function traverseTree(node, prev, graph) {
    if (!node) return;
    let neighbors = [prev.val]
    if (node.left) neighbors.push(node.left.val);
    if (node.right) neighbors.push(node.right.val);
    graph[node.val] = neighbors;

    traverseTree(node.left, node, graph)
    traverseTree(node.right, node, graph)
}

function findNodesKFromTarget(node, prev, depth, distance, graph, ans) {
    if (depth === distance) return ans.push(node);
    graph[node].forEach(neighbor => {
        if (neighbor !== prev) findNodesKFromTarget(neighbor, node, depth + 1, distance, graph, ans);
    })
}