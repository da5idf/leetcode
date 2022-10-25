var jobScheduling = function (startTime, endTime, profit) {

    const jobs = [];
    for (let i = 0; i < startTime.length; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }
    jobs.sort((a, b) => a[0] - b[0])

    const getNextJob = (idx) => {
        let nextIdx = idx + 1
        while (nextIdx < jobs.length && jobs[nextIdx][0] < jobs[idx][1]) {
            nextIdx++;
        }
        return nextIdx;
    }

    const dfs = (jobIdx) => {

        if (jobIdx >= jobs.length) {
            return 0
        }

        if (maxMap[jobIdx]) {
            return maxMap[jobIdx];
        }

        const nextJobIdx = getNextJob(jobIdx);

        const exclude = dfs(jobIdx + 1);
        const include = jobs[jobIdx][2] + dfs(nextJobIdx);

        const maxProfit = Math.max(include, exclude);
        maxMap[jobIdx] = maxProfit;
        return maxProfit
    }

    const maxMap = {};
    return dfs(0);
};

/***
 * It's important to keep track of profit as in lines 29/30 rather than passing
 * a 'curProfit' variable as a parameter for the dfs function. By doing it as 
 * written, we set our maxMap[jobIdx] = maxProfit from this position to the end.
 * If we pass a variable, we would incorrectly assign the maxMap[jobIdx].
 * 
 * As written when we reach the last idx of jobs, we assign maxMap[lastIdx] = profit[lastIdx]
 * This would not happen if we were passing a profit variable becuase that profit variable would
 * be the sum of all profits up to the lastIdx. As such, maxMap[lastIdx] = the sum of profits along
 * the fist path that reaches the last idx. 
 */