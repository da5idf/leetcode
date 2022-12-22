/***
Cheers to many other users for the same solution. I've added lots of explaination.
I would definitley use the graphic from the official solution for clarity.

Overall, the solution is sneaky combination of 2 different dfs helper functions.

1. We must select a node to be the root of the graph.
    The root must be a node in the graph (duh). So 0 <= root < n
    Consider the case where n = 1. 
    Then  0 <= root < 1
    In this case root MUST = 0
    For all n > 0, 0 will still be available as a root. So we choose 0 as root. 
2. The first dfs is used for two purposes:
    1. To fill an array subtreeCount where subtreeCount[i] represents
        the number of nodes in node i's subtree.
    2. To deturmine the total distance from our root node to all other nodes.
3. The second dfs uses subtreeCount and the distance from root to infer the 
    distance to all other nodes from node i.

Comments links to code:
*1  min subtree has 1 node in it, itself
*2  min distance is 0 if only 1 node in subtree
*3  sumDistances[leaf] will be 0 by construction
        sumDistances[parent of leaf] will thus be incremented by 1:
            sumDistances[parent of leaf] += sumDistances[child] + subtreeCount[child]
            sumDistances[parent of leaf] += 0 + 1
        In this way, we can recursively calculate the distances for our root node.
*4  This is the crux of the problem. First, we must dfs AFTER updating our sumDistance array
        Why? Because sumDistance[child] depends on the sumDistance of node (child's parent). 
        Therefore, if *5 were above *4, we would evaluate *4 incorrectly.
    Next, recognize that sumDistance[node] double counts some distances.
        Specifically, distance(child -> child of child) = distance(node -> child of child) - 1
        This removes the extra edge between child <-> node
        Notice that each node reduces the distance by 1. 
        And we have this value in subtreeCount[child]!
        So we reduce sumDistance[node] by this value.
    Finally, we also need to recognize that nodes on the other side of node require 1 additional edge to reach
        So for these nodes, we must ADD the number of nodes in the parent's tree. This can be found by
            parentNodeCount = n - subtreeCount[child];
    After updating our sumDistance[child], we recurse on this node making it the parent

Last note:    
It's true that in the first dfs, any node that has a subtreeCount > 1 will update sumDistances.
    However, this value gets overwritten at *4 when we correctly calculate its total sumDistance 
*/

var sumOfDistancesInTree = function (n, edges) {
    const graph = new Array(n).fill().map(() => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const subtreeCount = new Array(n).fill(1); // *1
    const sumDistances = new Array(n).fill(0); // *2

    var dfs = function (node, parent) {
        graph[node].forEach(child => {
            if (child !== parent) {
                dfs(child, node);
                subtreeCount[node] += subtreeCount[child];
                sumDistances[node] += sumDistances[child] + subtreeCount[child] // *3
            }
        })
    }
    var dfs2 = function (node, parent) {
        graph[node].forEach(child => {
            if (child !== parent) {
                const parentNodeCount = n - subtreeCount[child];
                sumDistances[child] = (sumDistances[node] - subtreeCount[child]) + parentNodeCount // *4
                dfs2(child, node); // *5
            }
        })
    }

    dfs(0, -1);
    dfs2(0, -1);
    return sumDistances;
};

let n = 8;
let edges = [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5], [3, 6], [3, 7]]
console.log(sumOfDistancesInTree(n, edges))