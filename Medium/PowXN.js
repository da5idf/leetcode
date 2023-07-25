/*
A faster solution with the same logic but cleaner
*/
var myPow = function (x, n) {
    if (isZero(n)) return 1;

    if (isNegative(n)) {
        return 1 / myPow(x, -1 * n)
    }

    if (isEven(n)) {
        return myPow(x * x, n / 2)
    }

    return x * myPow(x * x, (n - 1) / 2)
};

function isZero(x) {
    return x === 0
}

function isNegative(x) {
    return x < 0
}

function isEven(x) {
    return x % 2 === 0
}

/*
My first solution using iterattion.
Faster than linear time because 
x^n = x^(n/2) * x(n^2) when n is even and
x^n = x * x^((n - 1)/2) * x((n - 1)^2) when odd
*/
var myPow = function (x, n) {
    if (isZero(n)) return 1;

    let signX = getSign(x)
    const signN = getSign(n)
    n *= signN
    x *= signX

    if (exponentCancelsNegative(signX, n)) signX = 1
    if (isOne(x)) return 1 * signX;

    const multiple = helper(x, n);

    if (signN === -1) return 1 / multiple * signX
    return multiple * signX
};

function isZero(x) {
    return x === 0
}

function isOne(x) {
    return x === 1
}

function getSign(x) {
    return x < 0 ? -1 : 1
}

function exponentCancelsNegative(sign, exp) {
    if (sign < 0) {
        if (exp % 2 === 0) {
            return true;
        }
    }
    return false
}

function helper(x, n) {
    let exp = 1;
    let result = x;
    while (exp < n) {
        if (2 * exp <= n) {
            result *= result
            exp *= 2
        } else {
            result *= x
            exp++
        }
    }

    return result;
}