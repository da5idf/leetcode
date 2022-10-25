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