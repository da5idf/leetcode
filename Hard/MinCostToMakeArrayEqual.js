/*
This optimized solution does a few tricky things.
First, it sorts a zipped array by the value of nums.
Then, it utilizes the prefix sum and the fact that moves from
nums[i - 1] to nums[i] = ∆x and the increase in cost is:
    ∆x (prefix sum) - ∆x (suffix sum)
In other words, for all j < i we are moving ∆x steps more
nums[i]. Conversely, we are moving ∆x fewer steps to get to
all nums[k] where k > i.

We need a reference point for calculating cost so we 
initialize our answer to the cost of moving all nums to zipped[0][0]

From there, the relationship described above and adjust the cost variable.
At each iteration, we compare to answer to the cost at that step
*/
var minCost = function (nums, costs) {
    let zipped = [];
    const N = nums.length;
    for (let i = 0; i < N; i++) {
        zipped.push([nums[i], costs[i]])
    }

    zipped.sort((a, b) => a[0] - b[0]);

    const prefix = [zipped[0][1]];
    for (let i = 1; i < N; i++) {
        prefix.push(prefix[i - 1] + zipped[i][1])
    }

    let cost = 0;
    for (let i = 1; i < N; i++) {
        const delta = zipped[i][0] - zipped[0][0]
        cost += zipped[i][1] * delta;
    }

    let ans = cost;
    for (let i = 1; i < N; i++) {
        const delta = zipped[i][0] - zipped[i - 1][0];
        cost += delta * prefix[i - 1];
        cost -= delta * (prefix[N - 1] - prefix[i - 1])
        ans = Math.min(ans, cost)
    }
    return ans;
}

/*
My first solution that is O(n^2) and TLE
You can quickly show that the ans will be one of 
nums[i] with the following:
    Suppose converting all nums[i] to x is the
    cheapest, and that x is not equal to any nums[i].
    If all nums[i] are less than x then at the very least
    you would stop at the largest nums[i].
        n1, n2, n3, n4 .... x then 
        any move from n4 -> x is unnessesary cost
    The same goes for if all nums[i] are greater than x.
    What if n1 < x < n2 ?
        n1 has c1 and n2 has c2 which can be modeled as a line.
        In otherwords, the cost to move from n1 to n2 will either
        be strictly increasing, decreasing or flat. If it's flat
        then we can move to n1 or n2 which is a member of nums.
        If it's increasing then we move to n1 and if decreasing
        we move to n2.
*/
var minCost = function (nums, cost) {

    let ans = Infinity;
    const seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) continue;

        seen.add(nums[i]);
        ans = Math.min(ans, calculateCost(nums[i]))
    }

    function calculateCost(target) {
        return nums.reduce((prev, num, i) => {
            const dist = Math.abs(target - num);
            return prev + dist * cost[i];
        }, 0)
    }

    return ans
};