class Node {
    constructor(val) {
        this.val = val;
        this.next = [];
    }
}

var canFinish = function (numCourses, prerequisites) {

    let V = new Array(numCourses - 1).fill(false);

    for (let i = 0; i < prerequisites.length; i++) {
        let prereq = prerequisites[i];
        let nextClass = prereq[0]
        let reqClass = prereq[1]

        if (!V[nextClass]) {
            const nextNode = new Node(nextClass)
            V[nextClass] = nextNode;
        }
        if (!V[reqClass]) {
            const reqNode = new Node(reqClass);
            V[reqClass] = reqNode;
        }
        // add the next class to the required class's next list
        // i.e. after taking reqNode, you are able to take nextNode
        V[reqClass].next.push(V[nextClass])
    }

    for (let i = 0; i < numCourses; i++) {
        // if V[i] === false then that course has no pre-reqs, continue
        if (!V[i]) continue;

        if (!dfs(V[i])) return false;
    }
    return true;
}

var dfs = function (head) {

    let queue = head.next;
    let visited = new Set();

    while (queue.length) {
        let current = queue.shift();
        visited.add(current.val);

        // if current is the head, then we have a cycle
        if (current.val === head.val) return false;
        // add each next to the queue if we haven't visited that node yet.
        let adjList = current.next;
        adjList.forEach(node => {
            if (!visited.has(node.val)) {
                queue.push(node);
            }
        })
    }

    return true
}