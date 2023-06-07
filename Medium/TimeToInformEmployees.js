// An optimized dfs using memoization:
var numOfMinutes = function (n, headID, manager, informTime) {

    function timeToTop(id) {
        if (manager[id] === -1) return informTime[id];

        informTime[id] += timeToTop(manager[id]);
        manager[id] = -1; // This prevents recalculating pre-computed paths.
        return informTime[id]
    }

    let max = 0;
    manager.forEach((_, i) => {
        const iToTop = timeToTop(i)
        max = Math.max(max, iToTop)
    })
    return max;
};

/*
A dfs solution that did has a lot of repitition and ended up being quite slow
This solution fails to memo certain cases:
    Say one path if head -> n_1 -> n_2, -> n_3 -> ... -> n_k
    Futher, say n_4 in this path is employee 0 
        i.e. n_4's manager is manager[0]
             and it takes n_4 informTime[0] to inform n_5.
    Further, say n_5 is node 1.
        When we hit n_5's manager, n_4, we shoudl be able to stop
        because we already calculated head -> n_4 when at idx = 0 = n_4.
    However, we don't memo our informTimes in this solution which causes
        the algorithm to re-calculate n_4 -> n_3 -> n_2 -> n_1 -> head.
        In fact, this would repeat for every node!
*/
var numOfMinutes = function (n, headID, manager, informTime) {

    function helper(i) {
        const managerOfI = manager[i]
        if (managerOfI === -1) return 0;
        return informTime[managerOfI] + helper(managerOfI)
    }

    let max = 0;
    manager.forEach((_, i) => {
        const iToTop = helper(i)
        max = Math.max(max, iToTop)
    })
    return max;
};

// My first solution-- a straight forward bfs keeping track
// of the elapsed time for each person when they get added to the queue.
var numOfMinutes = function (n, headID, manager, informTime) {

    const graph = new Array(n).fill().map(() => [])

    for (let i = 0; i < n; i++) {
        if (manager[i] === -1) continue;
        graph[manager[i]].push(i)
    }

    let time = 0;
    const queue = [[headID, 0]]
    while (queue.length) {
        const [manager, elapsed] = queue.shift()
        time = Math.max(time, elapsed)
        for (const employee of graph[manager]) {
            queue.push([employee, elapsed + informTime[manager]]);
        }
    }
    return time;


};