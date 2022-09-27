var calculate = function (s) {
    let stack = [];
    const digits = "0123456789";
    let inNumber = false;
    const operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
    }

    for (let i = 0; i < s.length; i++) {
        if (digits.includes(s[i])) {
            inNumber ? stack[stack.length - 1] += s[i] : stack.push(s[i]);
            inNumber = true;
        }
        else if (s[i] === "+" || s[i] === "-") {
            inNumber = false;
            stack.push(s[i])
        }
        else if (s[i] === "(") {
            inNumber = false;
            stack.push(s[i]);
        }
        else if (s[i] === ")") {
            inNumber = false;
            let top = stack[stack.length - 1];
            let inParenSum = 0;
            while (top && top !== "(") {
                const num1 = Number(stack.pop());
                const operator = stack.pop();
                const num2 = Number(stack.pop());
                inParenSum += operations[operator](num1, num2);
                top = stack[stack.length - 1];
            }
            stack.pop();
            stack.push(`${inParenSum}`);
        }
    }

    let result = 0;
    while (stack.length > 1) {
        const num1 = Number(stack.pop());
        const operator = stack.pop();
        console.log(operator)
        const num2 = Number(stack.pop());
        result += operations[operator](num1, num2);
        top = stack[stack.length - 1];
    }

    return result;
}
/*
var calculate = function (s) {
    console.log("function call", s);
    let parenStack = [];
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") parenStack.push(i);
        while (parenStack.length) {
            i++
            if (s[i] === "(") parenStack.push(i);
            else if (s[i] === ")") {
                if (parenStack.length === 1) {
                    result += calculate(s.slice(parenStack[0] + 1, i))
                    console.log(result, s, i)
                    s = `${result}${s.slice(i + 1)}`
                }
                parenStack.pop();
            }
        }
    }

    let lastSeen = -1;
    const operators = "+-";
    const numbersArr = [];
    const operatorsArr = [];
    for (let i = 0; i < s.length; i++) {
        if (operators.includes(s[i])) {
            const numberStr = s.slice(lastSeen + 1, i);
            numbersArr.push(Number(numberStr));
            operatorsArr.push(s[i]);
            lastSeen = i;
        }
    }
    if (operatorsArr.length > 0) numbersArr.push(Number(s.slice(lastSeen + 1)))

    const operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
    }

    let calculated = numbersArr[0] || 0;
    for (let i = 0; i < operatorsArr.length; i++) {
        const num = numbersArr[i + 1];
        // console.log(calculated, num)
        calculated = operations[operatorsArr[i]](calculated, num)
    }
    return calculated + result
}
*/


// const s = "(1+(4+5+2)-3)+(6+8)"
const s = "(1+40)+3"
console.log(calculate(s));
