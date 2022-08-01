var evalRPN = function (tokens) {
    let res = [];

    let operators = {
        "+": function (x, y) {
            return x + y
        },
        "-": function (x, y) {
            return x - y
        },
        "*": function (x, y) {
            return x * y
        },
        "/": function (x, y) {
            if (x / y > 0) return Math.floor(x / y)

            return Math.ceil(x / y);
        }
    }

    for (let i = 0; i < tokens.length; i++) {
        if (operators[tokens[i]]) {
            let y = parseInt(res.pop());
            let x = parseInt(res.pop());
            res.push(operators[tokens[i]](x, y));
            continue;
        }
        res.push(tokens[i])
    }

    return res[0]
};

let tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
console.log(evalRPN(tokens))