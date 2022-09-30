var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n - 1) + fib(n - 2)
}

var fib = function (n) {
    const fibMap = {
        '0': 0,
        '1': 1
    };
    let i = 2
    while (i <= n) {
        fibMap[i] = fibMap[i - 1] + fibMap[i - 2];
        i++
    }

    return fibMap[n]
};