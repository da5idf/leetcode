var coinChange = function (coins, amount) {

    let mapping = {
        0: 0
    };
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0 && mapping[i - coins[j]] !== undefined) {
                if (mapping[i]) {
                    mapping[i] = Math.min(mapping[i - coins[j]] + 1, mapping[i])
                } else {
                    mapping[i] = mapping[i - coins[j]] + 1;
                }
            }
        }
    }
    if (mapping[amount] !== undefined) return mapping[amount]

    return -1;
};

console.log(coinChange([2, 5, 10, 1], 27))