// more concise version of my code
var taskSchedulerII = function (tasks, space) {
    const lastTaskMap = {}
    let curDay = 0;
    for (const task of tasks) {
        if (lastTaskMap[task] >= 0)
            lastTaskMap[task] = (curDay = Math.max(curDay, lastTaskMap[task] + space) + 1)
        else
            lastTaskMap[task] = ++curDay
    }
    return curDay;
}


var taskSchedulerII = function (tasks, space) {
    const lastTaskMap = {}
    let curDay = 0;

    for (let i = 0; i < tasks.length; i++) {
        let curTask = tasks[i];
        let lastOfThisTask = lastTaskMap[curTask];

        if (lastOfThisTask >= 0) {
            const dist = curDay - lastOfThisTask - 1;
            if (dist < space) {
                curDay += space - dist;
            } else lastTaskMap[curTask] = curDay;
        }

        lastTaskMap[curTask] = curDay;
        curDay++;
    }

    return curDay; // 5
};