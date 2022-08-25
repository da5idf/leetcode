// modified to include the actual coins as well.
var coinChange = function (coins, amount) {

    let mapping = {
        0: [0, []]
    };
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0 && mapping[i - coins[j]] !== undefined) {
                let [prevNumCoins, prevCoins] = mapping[i - coins[j]]
                if (mapping[i]) {
                    if (prevNumCoins + 1 < mapping[i][0]) {
                        let numCoins = prevNumCoins + 1
                        let coinsInSum = [...prevCoins, coins[j]]
                        mapping[i] = [numCoins, coinsInSum]
                    }
                } else {
                    mapping[i] = [prevNumCoins + 1, [...prevCoins, coins[j]]];
                }
            }
        }
    }
    if (mapping[amount] !== undefined) return mapping[amount]

    return -1;
};

console.log(coinChange([2, 5, 10, 1], 27))