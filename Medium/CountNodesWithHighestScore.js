var countHighestScoreNodes = function (parents) {
    const N = parents.length;
    const graph = new Array(N).fill().map(() => []);
    for (let i = 1; i < N; i++) {
        graph[parents[i]].push(i);
    }

    let highestScore = 0;
    let highestScoreCount = 0;
    var traverse = function (node) {
        if (node === undefined) return 0;
        const children = graph[node]
        const leftChildCount = traverse(children[0]);
        const rightChildCount = traverse(children[1]);
        const parentCount = N - leftChildCount - rightChildCount - 1;

        const curScore = (leftChildCount || 1) * (rightChildCount || 1) * (parentCount || 1);

        if (curScore > highestScore) {
            highestScore = curScore;
            highestScoreCount = 1;
        }
        else if (curScore === highestScore) highestScoreCount++;

        return 1 + leftChildCount + rightChildCount
    }

    traverse(0);
    return highestScoreCount;
};


/***
This didn't work because of the for loop, which is unnecessary.
We know 0 is the root of the tree. So if we traverse 0, we can
populate leftChildCount and rightChildCount for all nodes along the way
So the for loop causes us to dfs over every node instead of just once.

var countHighestScoreNodes = function (parents) {
    const N = parents.length;
    const graph = new Array(N).fill().map(() => []);
    for (let i = 1; i < N; i++) {
        graph[parents[i]].push(i);
    }

    var traverse = function (node) {
        if (!node) return 0;
        const children = graph[node]
        const leftChildCount = traverse(children[0]);
        const rightChildCount = traverse(children[1]);

        return 1 + leftChildCount + rightChildCount
    }

    let highestScore = 0;
    let highestScoreCount = 0;
    for (let i = 0; i < N; i++) {
        const children = graph[i];
        const leftChildCount = traverse(children[0]);
        const rightChildCount = traverse(children[1]);
        const parentCount = N - leftChildCount - rightChildCount - 1;

        const curScore = (leftChildCount || 1) * (rightChildCount || 1) * (parentCount || 1);

        if (curScore > highestScore) {
            highestScore = curScore;
            highestScoreCount = 1;
        }
        else if (curScore === highestScore) highestScoreCount++;
    }

    return highestScoreCount;
};
*/
