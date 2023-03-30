/***
 * Each day has an optimal cost. Starting with day 0 with cost 0.
 * We can initialize an array of length N = days[days.length - 1] = last travel day.
 * If we don't need to travel on a day, dp[day] = dp[day - 1];
 * If we do need to travel then dp[day] = Math.min(
 *          dp[day],
 *          dp[day - 1 or 7 or 30] + cost associated with that duration's cost
 *      )
 * In other words, say we need to travel on day 13. We can do one of the following:
 *      1. Build off the min cost from 1 day ago and add a 1 day ticket
 *      2. Build off the min cost from 7 days ago and add a 7 day ticket
 *      3. Build off the min cost from 30 days ago and add a 30 day ticket
 */

var mincostTickets = function (days, costs) {
    const N = days[days.length - 1]
    const dp = new Array(N + 1).fill(Infinity);
    dp[0] = 0;
    const durations = [1, 7, 30];
    let decision = 0;

    for (let day = 1; day <= N; day++) {
        if (day < days[decision]) dp[day] = dp[day - 1];
        else {
            decision++;
            for (let j = 0; j < costs.length; j++) {
                const duration = durations[j];
                const cost = costs[j];

                dp[day] = Math.min(dp[day], (dp[day - duration] || 0) + cost)
            }
        }
    }
    return dp[N]
}