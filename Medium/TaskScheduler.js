var leastInterval = function (tasks, n) {
    const taskCount = tasks.length;
    const taskCountMap = new Array(26).fill(0);

    let maxFrequency = 0;
    for (const char of tasks) {
        taskCountMap[char.charCodeAt(0) - 65]++;
        maxFrequency = Math.max(maxFrequency, taskCountMap[char.charCodeAt(0) - 65]);
    }

    let maxFreqCount = 0;
    for (let i = 0; i < 26; i++) {
        if (taskCountMap[i] === maxFrequency) maxFreqCount++;
    }

    return Math.max(taskCount, (n + 1) * (maxFrequency - 1) + maxFreqCount)
}
// maxFreqCount * maxFrequency + taskCount - (maxFreqCount * maxFrequency) - n * (maxFrequency - 1)

/*
var leastInterval = function (tasks, n) {
    const taskCount = tasks.length;
    const taskCountMap = new Array(26).fill(0);

    for (const char of tasks) {
        taskCountMap[char.charCodeAt(0) - 65]++;
    }
    taskCountMap.sort((a, b) => b - a);
    const maxCount = taskCountMap[0];
    let idleCount = n * (maxCount - 1);

    for (let i = 1; i < taskCountMap.length && idleCount > 0; i++) {
        idleCount -= Math.min(maxCount - 1, taskCountMap[i]);
    }
    
    idleCount = Math.max(0, idleCount);
    return taskCount + idleCount
};
*/
// const tasks = ["A", "A", "A", "B", "B", "B"]
const tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"]
console.log(leastInterval(tasks, 2))