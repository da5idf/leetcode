/*** A cleaner solution
 * by running through the nodes from 0 - (N - 1) in the loop
 * at the end, we guarantee the lowest idx node.
 */
var closestMeetingNode = function (edges, node1, node2) {
    const N = edges.length;
    const map1 = new Array(N).fill(undefined);
    const map2 = new Array(N).fill(undefined);

    let distance = 0;
    while (node1 !== -1 && map1[node1] === undefined) {
        map1[node1] = distance++;
        node1 = edges[node1];
    }
    distance = 0; // reset distance for node2 map
    while (node2 !== -1 && map2[node2] === undefined) {
        map2[node2] = distance++;
        node2 = edges[node2]
    }
    console.log(map1, map2)
    let localMax;
    let optimalNode = -1;
    let minMax = Infinity;
    for (let i = 0; i < N; i++) {
        if (map1[i] === NaN || map2[i] === NaN) continue
        localMax = Math.max(map1[i], map2[i]);
        if (localMax < minMax) {
            minMax = localMax;
            optimalNode = i;
        }
    }
    return optimalNode;
}

// my first solution
var closestMeetingNode = function (edges, node1, node2) {
    if (node1 === node2) return node1;
    let cur1 = node1;
    let cur2 = node2;

    let path1 = { [cur1]: 0 };
    let path2 = { [cur2]: 0 };
    let minMax = Infinity;
    let optimalNode = Infinity;
    while (cur1 !== -1 && path1[edges[cur1]] === undefined) {
        path1[edges[cur1]] = path1[cur1] + 1;
        cur1 = edges[cur1];
        if (path2[cur1] !== undefined) {
            if (Math.max(path1[cur1], path2[cur1]) < minMax) {
                minMax = Math.max(path1[cur1], path2[cur1]);
                optimalNode = cur1;
            } else if (Math.max(path1[cur1], path2[cur1]) === minMax) {
                if (cur1 < optimalNode) optimalNode = cur1;
            }
        }
    }
    while (cur2 !== -1 && path2[edges[cur2]] === undefined) {
        path2[edges[cur2]] = path2[cur2] + 1;
        cur2 = edges[cur2];
        if (path1[cur2] !== undefined) {
            if (Math.max(path1[cur2], path2[cur2]) < minMax) {
                minMax = Math.max(path1[cur2], path2[cur2]);
                optimalNode = cur2
            } else if (Math.max(path1[cur2], path2[cur2]) === minMax) {
                if (cur2 < optimalNode) optimalNode = cur2;
            }
        }
    }
    return optimalNode === Infinity ? -1 : optimalNode;
};