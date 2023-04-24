var lastStoneWeight = function (stones) {
    stones.sort((a, b) => a - b)

    while (stones.length > 1) {
        const larger = stones.pop();
        const smaller = stones.pop();
        if (smaller < larger) stones.push(larger - smaller);
        stones.sort((a, b) => a - b)
    }

    return stones.length ? stones[0] : 0
};