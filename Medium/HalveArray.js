var halveArray = function (nums) {
    const mpq = new MinPriorityQueue({ priority: x => -x })
    let totalSum = 0;
    for (const num of nums) {
        totalSum += num;
        mpq.enqueue(num);
    }
    let curSum = totalSum;
    let steps = 0;
    while (curSum > totalSum / 2) {
        steps++;
        const next = mpq.dequeue().element;
        curSum -= (next / 2);
        mpq.enqueue(next / 2);
    }

    return steps;
};