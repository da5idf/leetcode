// improved solution
var validateStackSequences = function (pushed, popped) {
    const N = pushed.length
    let popPointer = 0;
    const stack = []
    for (let pushPointer = 0; pushPointer < N; pushPointer++) {
        stack.push(pushed[pushPointer]);
        while (stack.length && popPointer < N && stack[stack.length - 1] === popped[popPointer]) {
            stack.pop();
            popPointer++
        }
    }

    return popPointer === N;
};

// my first solution
var validateStackSequences = function (pushed, popped) {
    let pushPointer = 1;
    let popPointer = 0;

    const stack = [pushed[0]]
    for (let i = 1; i < pushed.length * 2; i++) {
        if (stack[stack.length - 1] === popped[popPointer]) {
            stack.pop();
            popPointer++;
        } else {
            stack.push(pushed[pushPointer++])
        }
    }

    return stack.length === 0;
};