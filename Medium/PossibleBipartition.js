// my dfs solution
var possibleBipartition = function (n, dislikes) {
    // create a graph of dislikes
    const graph = new Array(n + 1).fill().map(() => [])
    for (const [p1, p2] of dislikes) {
        graph[p1].push(p2);
    }

    // colorMap is used to assign a color to each person
    const colorMap = new Array(n + 1).fill(0);
    // we need to check if each person can be colored validly
    for (let person = 1; person <= n; person++) {
        // if they have already been colored, that person
        // is on a set of people who can be colored validly.
        if (colorMap[person] !== 0) continue

        // otherwise, see if this person's dislike set can be colored
        if (!color(person)) return false
    }

    return true;

    function color(person, assignment) {
        // for the first function call, we need to find this person's color
        if (!assignment) assignment = getAssignment(person);
        if (!assignment) return false; // getAssignment returned null;

        // if this function call got passed an assignment argument
        // it means that we have seen this person before.
        if (colorMap[person] === assignment) return true; // seen and s/he's colored correctly
        if (colorMap[person] === assignment * -1) return false; // seen and colored incorrectly

        // if the assignment is valid, assign it
        colorMap[person] = assignment;

        // iterate through the dislike list with assignment flipped
        for (const dislike of graph[person]) {
            if (!color(dislike, assignment * -1)) return false
        }

        return true;
    }

    function getAssignment(person) {
        // we narrow down the available assignment given person's dislike list
        let assignment = new Set([1, -1])
        for (const dislike of graph[person]) {
            if (colorMap[dislike] === 1) assignment.delete(1)
            if (colorMap[dislike] === -1) assignment.delete(-1)
        }

        // if the dislike list contains people with both colors, then person
        // can't be assigned to a color correctly.
        if (assignment.size === 0) return null;

        // WLOG we return the -1 if both 1 and -1 are available
        return Math.min(...assignment)
    }
};

// dfs solution
var possibleBipartition = function (n, dislikes) {
    const graph = new Array(n + 1).fill().map(() => []);
    for (const [u, v] of dislikes) {
        graph[u].push(v);
        graph[v].push(u); // this line is not explicitly correct from the instructions
    }

    const colorMap = new Array(n + 1);
    const visited = new Array(n + 1);

    for (let person = 1; person <= n; person++) {
        if (!color(person)) return false;
    }

    return true;

    function color(person) {
        if (visited[person]) return true;
        const colors = new Set([1, 2])
        for (const dislike of graph[person]) {
            if (colorMap[dislike] === 1) colors.delete(1)
            if (colorMap[dislike] === 2) colors.delete(2)
        }

        if (colors.size === 0) return false;
        colorMap[person] = Math.min(...colors);
        visited[person] = true;

        for (const dislike of graph[person]) {
            if (!color(dislike)) return false;
        }

        return true;
    }
}

var possibleBipartition = function (n, dislikes) {
    const graph = new Array(n + 1).fill().map(() => [])
    for (const [p1, p2] of dislikes) {
        graph[p1].push(p2);
    }

    const colorMap = new Array(n + 1);
    for (let person = 1; person <= n; person++) {
        if (!color(person)) return false
    }

    return true;

    function color(person, assignment) {
        if (colorMap[person] !== 0) return true;
        if (colorMap[person] === assignment * -1) return false;

        colorMap[person] = assignment;

        for (const dislike of graph[person]) {
            if (!color(dislike, assignment * -1)) return false
        }

        return true;
    }
};


/* // my first solution with bfs
var possibleBipartition = function (n, dislikes) {
    const map = {}
    for (const [p1, p2] of dislikes) {
        if (!map[p1]) map[p1] = [p2]
        else map[p1].push(p2)
    }

    let validVisits = new Set();
    for (let person = 1; person <= n; person++) {
        if (!validVisits.has(person)) {
            const [valid, visited] = traverse(person, map, validVisits, n);
            if (!valid) return false;
            validVisits.add(...visited);
        }
    }
    return true;
};

var traverse = function (person, map, alreadyVisited, n) {
    const visited = new Set().add(person);
    const groupAssignment = new Array(n).fill(0);
    const queue = [person];
    let group = 1;
    groupAssignment[person - 1] = group;
    while (queue.length) {
        group *= -1; // change between -1, 1
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const curr = queue.shift();
            const dislikeList = map[curr] || [];
            for (const dislike of dislikeList) {
                if (alreadyVisited.has(dislike) || groupAssignment[dislike - 1] === group) continue
                else if (groupAssignment[dislike - 1] === 0) {
                    groupAssignment[dislike - 1] = group;
                    queue.push(dislike);
                }
                else return [false, null]
            }
        }
    }

    return [true, visited]
}
*/