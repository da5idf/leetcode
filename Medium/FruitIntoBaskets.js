/***
 *  Sliding window solution
 * 
 *  A key to these sliding window questions is that we frequently
 *  have an INVALID window. However, this doesn't affect our solution.
 *  In fact, we can use this to our advantage.
 * 
 *  We have a start idx i and an end idx j. We loop while j < N because 
 *      once j has reached the end of fruits, we will know our max window.
 *  At each iteration, we first check 3 things related to j and its fruit:
 *      1. Determine if the fruit at idx j is a new fruit. if yes, 
 *          increment diffFruitCount: number of different fruits in our window
 *      2. Increment the number of fruits at idx j we have
 *      3. Increment j
 *  Next, we need to determine if we have a valid window.
 *      If yes: continue
 *      If no:
 *          1. find the start fruit i.e. fruits[i]
 *          2. decrement the number of that fruit we have in our basket
 *          3. If the number from 3 is 0, we don't have that fruit anymore so we
 *              can decrement the diffFruitCount.
 *          4. increment i
 * 
 *  In this algorithm, the window never shrinks. We konw this becuase j
 *  increments on every loop, and i only increments when diffFruitCount > 2.
 *  This is OK! All we care about is the max window. It's ok for the window 
 *  to be invalid because at one point, a window with indices i and j WAS valid.
 */

var totalFruit = function (fruits) {
    const N = fruits.length;
    let i = 0, j = 0;
    const fruitCountMap = new Array(N).fill(0);
    let diffFruitCount = 0;

    while (j < N) {
        const curFruit = fruits[j]

        if (fruitCountMap[curFruit] === 0) diffFruitCount++
        fruitCountMap[curFruit]++;
        j++;

        if (diffFruitCount > 2) {
            const startFruit = fruits[i]
            fruitCountMap[startFruit]--
            if (fruitCountMap[startFruit] === 0) diffFruitCount--;
            i++;
        }
    }

    return j - i
}


// my original very slow solution
var totalFruit = function (fruits) {
    const N = fruits.length;

    var getCount = function (idx) {
        let count = 1;
        const first = fruits[idx]
        let second = undefined;
        let nextIdx = idx + 1;
        for (let i = idx + 1; i < N; i++) {
            if (fruits[i] !== first && second === undefined)
                second = fruits[i]
            else if (fruits[i] !== first && fruits[i] !== second)
                return [count, nextIdx];

            count++;

            if (fruits[i - 1] !== fruits[i]) nextIdx = i - 1;
        }
        return [count, nextIdx]
    }

    let max = 1;
    for (let i = 0; i < N;) {
        [count, nextStart] = getCount(i)
        max = Math.max(count, max);
        i = i === nextStart ? i + 1 : nextStart;
    }

    return max;
};