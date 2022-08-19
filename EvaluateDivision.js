var addEquation = function (graph, numerator, denominator, quotient) {
    if (graph[numerator]) {
        graph[numerator].push([denominator, quotient]);
    } else {
        graph[numerator] = [[denominator, quotient]];
    }
}

var makeGraph = function (equations, values) {
    let res = {};
    for (let i = 0; i < equations.length; i++) {
        let [numerator, denominator] = equations[i];
        addEquation(res, numerator, numerator, 1);
        addEquation(res, numerator, denominator, values[i])
        addEquation(res, denominator, numerator, 1 / values[i])
    }
    return res;
}

var evaluate = function (query, graph) {
    let currVar = query[0];
    const target = query[1];
    const queue = [[currVar, 1]];
    const visited = new Set();
    console.log(query);
    while (queue.length) {
        let [currVar, total] = queue.shift();
        visited.add(currVar);
        let equationList = graph[currVar] || [];

        for (let i = 0; i < equationList.length; i++) {
            let [denominator, quotient] = equationList[i];
            if (denominator === target) {
                return total * quotient;
            } else if (!visited.has(denominator)) {
                queue.push([denominator, total * quotient])
            }
        }
    }
    return -1;
}

var calcEquation = function (equations, values, queries) {
    graph = makeGraph(equations, values);
    console.log(graph);
    return queries.map(query => evaluate(query, graph))
};

let equations = [["a", "b"], ["b", "c"], ["bc", "cd"]], values = [1.5, 2.5, 5.0], queries = [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]

console.log(calcEquation(equations, values, queries))