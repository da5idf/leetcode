var canFinish = function (numCourses, prerequisites) {

    let requiredClassesForIdx = new Array(numCourses).fill().map(ele => []);

    for (let [nextClass, reqClass] of prerequisites) {
        // add the next class to the required class's next list
        // i.e. after taking reqNode, you are able to take nextNode
        requiredClassesForIdx[nextClass].push(reqClass)
    }

    for (let i = 0; i < numCourses; i++) {

        if (!requiredClassesForIdx[i].length) continue; // no prereqs for class i

        if (!dfs(i, requiredClassesForIdx)) {
            return false;
        }
    }
    return true;
}

var dfs = function (classNum, adjLists) {
    let queue = [...adjLists[classNum]]
    let visited = new Set();

    while (queue.length) {
        let current = queue.shift();
        visited.add(current);

        // we loop on our preReqs if classNum appears in our queue
        if (current === classNum) return false

        // add each prerec to the queue if we haven't visited that class yet.
        let adjList = [...adjLists[current]];
        for (let i = 0; i < adjList.length; i++) {
            if (!visited.has(adjList[i])) {
                queue.push(adjList[i]);
            }
        }
    }

    return true
}