// slightly optimized solution from below;
var dailyTemperatures = function (temperatures) {
    const stack = [0];
    for (let curDay = 1; curDay < temperatures.length; curDay++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[curDay]) {
            const lowerTempIdx = stack.pop();
            temperatures[lowerTempIdx] = curDay - lowerTempIdx;
        }
        stack.push(curDay);
    }

    while (stack.length) {
        temperatures[stack.pop()] = 0;
    }

    return temperatures
}

var dailyTemperatures = function (temperatures) {
    const stack = [[temperatures[0], 0]];
    for (let i = 1; i < temperatures.length; i++) {
        let lowestInStack = stack[stack.length - 1];
        while (stack.length && lowestInStack[0] < temperatures[i]) {
            temperatures[lowestInStack[1]] = i - lowestInStack[1];
            stack.pop();
            lowestInStack = stack[stack.length - 1];
        }
        stack.push([temperatures[i], i])
    }

    while (stack.length) {
        const idx = stack.pop()[1];
        temperatures[idx] = 0
    }

    return temperatures
};