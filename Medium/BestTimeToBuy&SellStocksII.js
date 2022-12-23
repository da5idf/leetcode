var maxProfit = function (prices) {
    let i = 0;
    let valley, peak;
    let max = 0;
    while (i < prices.length - 1) {
        while (i < prices.length && prices[i + 1] <= prices[i]) i++
        valley = prices[i];
        while (i < prices.length && prices[i + 1] >= prices[i]) i++
        peak = prices[i];

        max += peak - valley;
    }

    return max;
};